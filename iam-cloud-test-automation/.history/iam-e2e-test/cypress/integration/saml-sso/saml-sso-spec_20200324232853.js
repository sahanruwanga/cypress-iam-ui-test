// import SampleApp from './sample.spec'



describe('landing page tests', function () {
    //  const sampleApp = new SampleApp()
      beforeEach(function () {
          cy.clearCookies();
          cy.clearLocalStorage(); 
      cy.visit('http://localhost:3000/app');
      
        })

        



        it('SAML SSO with sample Application', function () {
            cy.get('@user')
            .then(user => {
                let base64Encode = cy.base64encode(user.adminuser, user.adminupword);
                const adminuserName = user.adminuser;
                const adminpassword = user.adminupword;
                const userName = user.username;
                const password = user.password;
                cy.login(adminuserName, adminpassword, base64Encode, this.data);
                cy.login(userName, password);
            });
        })
        it("Test for the User Creation via SCIM2", function () {
            cy.fixture('new-user').as("user");
            cy.fixture('new-scim-user-create').as("data");
            
             cy.get('@user')
                 .then(user => {
                     let base64Encode = cy.base64encode(user.adminuser, user.adminupword);
                     const adminUserName = user.adminuser;
                     const adminPassword = user.adminupword;
                     const userName = user.username;
                     const password = user.password;

                     cy.loginSCIM(adminUserName, passwadminPasswordord, base64Encode, this.data);
                     cy.login(userName,password);
                    
                     
                     
 
                   
                 
 
 
                 })
         })


  })
  Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
     
       //   expect(err.message).to.include('Ignoring error for now');
      console.log('Cypress detected uncaught exception', err);
      debugger
      return false;
    });