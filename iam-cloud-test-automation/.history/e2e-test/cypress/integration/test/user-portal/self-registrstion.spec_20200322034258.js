
import LandingPage from '../../pages/landing_page'
import * as SelfSignPageLocators from '../../../support/utils/signing-up-locators.js'

describe('Login tests', function () {
    const landingPage = new LandingPage()

    before(function () {
      cy.clearCookies()
    })

    before(function() {
      cy.visit('/user-portal');
      cy.fixture('new-user').as("user"); 
    });

//    it('does not allow non admin user access', function () {
//      // Login as normal user
//      loginPage.loginUser(Cypress.env('LMS_USER_EMAIL'), Cypress.env('LMS_USER_PASSWORD'))
//      // Check that enterprise list container is not present
//      landingPage.enterpriseListContainer().should('not.exist')
//    })

    it('1. validate Loading Page', function () {
 
      landingPage.getinItialLocators();
    })
 

  it('2. Create a new user', function () {
    

    
    // validate form title in self-signin page
    if(SelfSignPageLocators.sr_form_title() && SelfSignPageLocators.username_label){
    cy.get("@user").then((user) => {
        SelfSignPageLocators.enater_new_username().debug().clear().type(user.username);
        SelfSignPageLocators.create_user().debug().click();
      });
     
      }
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