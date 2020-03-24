import SampleApp from './sample.spec'
describe('landing page tests', function () {
   const sampleApp = new SampleApp()
    beforeEach(function () {
        
    cy.visit('http://localhost:3000/app')

      })
      it('checks user menu content and actions', function () {
        // Check user email in profile drop down
       cy.log("))))))))))");
        // Logout the user from application
        // landingPage.logoutUser()
        // // Check that enterprise list container is not present
        // landingPage.enterpriseListContainer().should('not.exist')
      })
})