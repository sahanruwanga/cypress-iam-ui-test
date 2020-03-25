import LandingPage from '../rest-api/scim-api-user.js'
describe('landing page tests', function () {
  const landingPage = new LandingPage();
  before(function () {
    cy.visit('http://localhost:3000/app');

    cy.fixture('new-user').as("user");

    cy.fixture('new-scim-user-create').as("data");
  });

  it('checks user menu content and actions', function () {

    cy.get('@user')
      .then(user => {
        let base64Encode = cy.base64encode(user.adminuser, user.adminupword);
        const userName = user.adminuser;
        const password = user.adminupword;
        cy.log("@@@@@@@@" + userName + "******" + password)
        //landingPage.createSCIMUser(userName, password, base64Encode, this.data);

      })
    cy.wait(3000);
    cy.login();
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