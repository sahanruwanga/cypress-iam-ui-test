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


require('customer-env').env()
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
         plygroundLocators.clientID_label();
         plygroundLocators.clientID_input().debug().clear().type(process.env.WSO2_CLIENT_ID);  
        }
        
      })



    // entryPoint: process.env.SAML_ENTRYPOINT,
	// 	issuer: process.env.SAML_ISSUER,
	// 	protocol: process.env.SAML_PROTOCOL,
	// 	logoutUrl: process.env.SAML_LOGOUTURL






      
 
 
         
 })
   Cypress.on('uncaught:exception', (err, runnable) => {
       // returning false here prevents Cypress from
       // failing the test
      
        //   expect(err.message).to.include('Ignoring error for now');
       console.log('Cypress detected uncaught exception', err);
       debugger
       return false;
     });