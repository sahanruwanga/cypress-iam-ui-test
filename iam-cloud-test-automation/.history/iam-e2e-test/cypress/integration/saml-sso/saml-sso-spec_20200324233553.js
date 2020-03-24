// import SampleApp from './sample.spec'



describe('landing page tests', function () {
    //  const sampleApp = new SampleApp()
      beforeEach(function () {
          cy.clearCookies();
          cy.clearLocalStorage(); 
      cy.visit('http://localhost:3000/app');
      
        })

        



       
        it("SAML SSO with sample Application", function () {
            // cy.fixture('new-user').as("user");
            // cy.fixture('new-scim-user-create').as("data");
            
            //  cy.get('@user')
            //      .then(user => {
                    const adminUserName = user.adminuser;
                    const adminPassword = user.adminupword;
                    const userName = user.username;
                    const password = user.password;

                     let base64Encode = cy.base64encode('admin', 'admin!!ciam@wso2');
                     

                     cy.loginSCIM('admin', 'admin!!ciam@wso2', base64Encode, '{"schemas":[],"name":{"familyName":"Automation","givenName":"Testuserqq"},"userName":"Testautomationuser","password":"wso2@123","emails":[{"primary":true,"value":"test.auto@gmail.com","type":"home"},{"value":"autotestwork@wso2.com","type":"work"},{"value":"wso2iamtest@gmail.com"}]}');
                     cy.login('Testautomationuser','wso2@123');
                    
                     
                     
 
                   
                 
 
 
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