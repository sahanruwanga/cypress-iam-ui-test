import * as plygroundLocators from '../../support/utils/play-ground-locators.js'

describe('landing page tests', function () {
    // const landingPage = new LandingPage();
//     before(function() {
//    // cy.visit('http://localhost:3000/app');
  
//      cy.fixture('new-user').as("user");
        
//          cy.fixture('new-scim-user-create').as("data");
//      });
 
//      // beforeEach(() => {
//      //   //  cy.visit('http://localhost:3000/app');
         
//      //     //cy.visit('/user-portal')
 
 
 
//      // })



const baseUrl = 'http://localhost:8080/playground2/'



    it('Selecting value on slider', () => {
      cy.visit(baseUrl);
      cy.get('a[href="oauth2.jsp"]').click();
      
    })
    it('Selecting value on slider', () => {
        if(plygroundLocators.playground_page_title()){
         //label validate
         plygroundLocators.grant_type();
         plygroundLocators.select_implicit();   
        }
        
      })



    // entryPoint: process.env.SAML_ENTRYPOINT,
	// 	issuer: process.env.SAML_ISSUER,
	// 	protocol: process.env.SAML_PROTOCOL,
	// 	logoutUrl: process.env.SAML_LOGOUTURL






       it('checks user menu content and actions', function () {
         // Check user email in profile drop down
         cy.visit('/'); 
         cy.get('@user')
         .then(user => {
             let base64Encode = cy.base64encode(user.adminuser, user.adminupword);
             const userName = user.adminuser;
             const password = user.adminupword;
             cy.log("@@@@@@@@"+userName+"******"+password)
             //landingPage.createSCIMUser(userName, password, base64Encode, this.data);
             
         })
         cy.wait(3000);
       //  cy.login();
             
 
             
        
         // Logout the user from application
         // landingPage.logoutUser()
         // // Check that enterprise list container is not present
         // landingPage.enterpriseListContainer().should('not.exist')
       })
 
 
         after(() => {
           cy.login();
           });
 })
   Cypress.on('uncaught:exception', (err, runnable) => {
       // returning false here prevents Cypress from
       // failing the test
      
        //   expect(err.message).to.include('Ignoring error for now');
       console.log('Cypress detected uncaught exception', err);
       debugger
       return false;
     });