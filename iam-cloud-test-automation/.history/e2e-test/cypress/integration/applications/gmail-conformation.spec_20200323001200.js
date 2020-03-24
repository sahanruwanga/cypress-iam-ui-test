describe('Login', () => {
    before(() => {

        
        cy.clearCookies();
        cy.visit('https://accounts.google.com/servicelogin');
      })

      beforeEach(function () {
        cy.fixture('new-user').as("user");
        // Preserve the cookies for all tests in this suite
        Cypress.Cookies.preserveOnce('SESSION')
     //   cy.clearLocalStorage();
      //  cy.clearCookies();
    
      })
    it('Login through Google', () => {
        cy.get('@user')
                .then(user => {
                    cy.get('input[name="identifier"]').clear().type(user.email+'{enter}', {force: true});
                   // cy.get('span.RveJvd snByac').click();
                    cy.get('input[name="password"]').clear().type(user.email_password+'{enter}', {force: true},{log:false});
                    cy.get('span.RveJvd snByac').click();
            
                });
        
    });
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
    















