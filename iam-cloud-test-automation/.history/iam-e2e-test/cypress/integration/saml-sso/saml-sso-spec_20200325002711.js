// import SampleApp from './sample.spec'



describe('landing page tests', function () {
    //  const sampleApp = new SampleApp()
      beforeEach(function () {
          cy.clearCookies();
          cy.clearLocalStorage(); 
      cy.visit('http://localhost:3000/app');
      cy.signIn();
        })

        



       
        it("SAML SSO with sample Application", function () {
              cy.login("&&&&&&&&&&&&&&&&&&&&&&");
            // cy.fixture('new-user').as("user");
            // cy.fixture('new-scim-user-create').as("data");
            
            //  cy.get('@user')
            //      .then(user => {
                    // const adminUserName = user.adminuser;
                    // const adminPassword = user.adminupword;
                    // const userName = user.username;
                    // const password = user.password;

                    
                     

                    
                  //   cy.login();
                    
                     
                     
 
                   
                 
 
 
                //  })
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