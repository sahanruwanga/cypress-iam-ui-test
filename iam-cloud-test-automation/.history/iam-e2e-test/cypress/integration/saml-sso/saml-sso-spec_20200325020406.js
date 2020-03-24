// import SampleApp from './sample.spec'



// describe('landing page tests', function () {
//     //  const sampleApp = new SampleApp()
//       beforeEach(function () {
//           cy.clearCookies();
//           cy.clearLocalStorage(); 
//       cy.visit('http://localhost:3000/app');
//       cy.signIn();
//         })

        



       
//         it("SAML SSO with sample Application", function () {
//               cy.login("&&&&&&&&&&&&&&&&&&&&&&");
//             // cy.fixture('new-user').as("user");
//             // cy.fixture('new-scim-user-create').as("data");
            
//             //  cy.get('@user')
//             //      .then(user => {
//                     // const adminUserName = user.adminuser;
//                     // const adminPassword = user.adminupword;
//                     // const userName = user.username;
//                     // const password = user.password;

                    
                     

                    
//                   //   cy.login();
                    
                     
                     
 
                   
                 
 
 
//                 //  })
//          })


//   })

import LandingPage from '../rest-api/scim-api-user.js'
describe('landing page tests', function () {
   const landingPage = new LandingPage();
   before(function() {
    cy.visit('http://localhost:3000/app');
    cy.fixture('new-user').as("user");
       
        cy.fixture('new-scim-user-create').as("data");
    });

    // beforeEach(() => {
    //   //  cy.visit('http://localhost:3000/app');
        
    //     //cy.visit('/user-portal')



    // })
      it('checks user menu content and actions', function () {
        // Check user email in profile drop down
        
        cy.get('@user')
        .then(user => {
            let base64Encode = cy.base64encode(user.adminuser, user.adminupword);
            const userName = user.adminuser;
            const password = user.adminupword;
            cy.log("@@@@@@@@"+userName+"******"+password)
            //landingPage.createSCIMUser(userName, password, base64Encode, this.data);
            
        })
        cy.wait(3000);
            cy.login();
       
        // Logout the user from application
        // landingPage.logoutUser()
        // // Check that enterprise list container is not present
        // landingPage.enterpriseListContainer().should('not.exist')
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