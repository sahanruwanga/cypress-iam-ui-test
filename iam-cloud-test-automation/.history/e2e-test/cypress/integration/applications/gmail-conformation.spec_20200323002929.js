const CDP = require('chrome-remote-interface');

async function example() {
    let client;
    try {
        // connect to endpoint
        client = await CDP();
        // extract domains
        const {Network, Page} = client;
        // setup handlers
        Network.requestWillBeSent((params) => {
            console.log(params.request.url);
        });
        // enable events then start!
        await Network.enable();
        await Page.enable();
        await Page.navigate({url: 'https://accounts.google.com/servicelogin'});
        await Page.loadEventFired();
    } catch (err) {
        console.error(err);
    } finally {
        if (client) {
            await client.close();
        }
    }
}



describe('Login', () => {
    before(() => {

        
        cy.clearCookies();
        cy.visit(example());
      })

      beforeEach(function () {
        cy.fixture('new-user').as("user");
        // Preserve the cookies for all tests in this suite
        Cypress.Cookies.preserveOnce('SESSION')
       cy.clearLocalStorage();
     //  cy.clearCookies();
    
      })
    it('Login through Google', () => {
        cy.get('@user')
                .then(user => {
                    cy.get('input[name="identifier"]').clear().type(user.email+'{enter}', {force: true});
                   cy.wait(3000);
                    cy.get('input[name="password"]').clear().type(user.email_password+'{enter}', {force: true},{log:false});

            
                });
        
    });
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    //         // validate form title in self-signin page
    //         if (SelfSignPageLocators.sr_form_title() && SelfSignPageLocators.username_label) {
        
    //           cy.get('@user')
    //             .then(user => {
    //               SelfSignPageLocators.enater_new_username().debug().clear().type(user.username);
    //               SelfSignPageLocators.create_user().debug().click();
    //             });
    //         }
        
     
    //   const username = Cypress.env('googleSocialLoginUsername')
    //   const password = Cypress.env('googleSocialLoginPassword')
    //   const loginUrl = Cypress.env('loginUrl')
    //   const cookieName = Cypress.env('cookieName')
    //   const socialLoginOptions = {
    //     username,
    //     password,
    //     loginUrl,
    //     headless: true,
    //     logs: false,
    //     loginSelector: 'a[href="/auth/auth0/google-oauth2"]',
    //     postLoginSelector: '.account-panel'
    //   }
    















