
import LandingPage from '../../pages/landing_page'

describe('Login tests', function () {
    const landingPage = new LandingPage()

    before(function () {
      cy.clearCookies()
    })

    before(function() {
      cy.visit('/user-portal');
    });

//    it('does not allow non admin user access', function () {
//      // Login as normal user
//      loginPage.loginUser(Cypress.env('LMS_USER_EMAIL'), Cypress.env('LMS_USER_PASSWORD'))
//      // Check that enterprise list container is not present
//      landingPage.enterpriseListContainer().should('not.exist')
//    })

    it('validate Loading Page', function () {
      // Login as admin user
//      loginPage.loginUser(Cypress.env('ADMIN_USER_EMAIL'), Cypress.env('ADMIN_USER_PASSWORD'))
      // Check that enterprise list container is present
      landingPage.getinItialLocators();
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