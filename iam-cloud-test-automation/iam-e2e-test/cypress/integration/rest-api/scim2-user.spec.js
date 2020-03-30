describe('Test cases for SAML SSO Scenarios', function () {
 before(function () {
    cy.clearCookies();
    cy.clearLocalStorage();

    cy.visit('http://localhost:3000/app');

 })

  it('check whether user able to login to sample service provider through WSO2 IDP', function () {

    cy.login();
  })

})
