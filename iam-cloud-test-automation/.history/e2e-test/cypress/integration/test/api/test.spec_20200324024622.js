 import LandingPage from '/scim2-user'
describe('landing page tests', function () {
   const landingPage = new LandingPage()
    beforeEach(function () {
    cy.visit('/user-portal')
      })
      it('checks user menu content and actions', function () {
        // Check user email in profile drop down
       cy.log( "landingPage.createSCIMUser()");
        // Logout the user from application
        // landingPage.logoutUser()
        // // Check that enterprise list container is not present
        // landingPage.enterpriseListContainer().should('not.exist')
      })
})