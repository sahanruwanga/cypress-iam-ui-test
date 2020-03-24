import 'cypress-file-upload';
import '@percy/cypress';
import LandingPage from '../pages/landing_page'

describe('Self Registration Test', function () {
    
    const landingPage = new LandingPage()
  
    before(function () {
      cy.clearCookies()
    })
  
    beforeEach(function () {
      cy.visit('/')
    })
  
    it('verify whether user able to register via user portal', function () {
      // Login as normal user
      // Check that page title present
    //   landingPage.getPageTitle().should('exist')
    })
  
    // it('allows admin user access on application after lopgin', function () {
    //   // Login as admin user
    //   loginPage.loginUser(Cypress.env('ADMIN_USER_EMAIL'), Cypress.env('ADMIN_USER_PASSWORD'))
    //   // Check that enterprise list container is present
    //   landingPage.enterpriseListContainer().should('exist')
    // })
  })
  