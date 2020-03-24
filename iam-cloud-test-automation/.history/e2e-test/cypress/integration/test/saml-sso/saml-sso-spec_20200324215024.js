import SampleApp from './sample.spec'
describe('landing page tests', function () {
   const sampleApp = new SampleApp()
    beforeEach(function () {
        cy.clearCookies();
        cy.clearLocalStorage(); 
    cy.visit('http://localhost:3000/app');
    cy.fixture('new-user').as("user");

      })
      it('checks user menu content and actions', function () {
        cy.get('@user')
                .then(user => {
                    
                    const userName = user.username;
                    const password = user.password;
        cy.login(userName, password);
                });
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