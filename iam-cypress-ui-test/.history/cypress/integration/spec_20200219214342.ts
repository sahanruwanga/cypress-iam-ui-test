// describe('CRA', () => {
//     it('shows learn link', function () {
//         cy.visit(' https://is510B.qa.com:443/t/wso2.com/user-portal/')
//         // cy.get('.App-link').should('be.visible')
//         //     .and('have.text', 'Learn React')
//         cy.title().should('eq', 'WSO2 Identity Server')
//     })
// })
describe('Testing WSO2 Identity Server Login Page', () => {
it('Perform Login',() =>{
//Visit WSO2 User-Portal Login Page
cy.visit(' https://localhost:9443/user-portal/')
cy.title().should('eq', 'WSO2 Identity Server')
//cy.contains('Continue').click();

//Enter uUsername & password
cy.get('#username').type('admin');
cy.get('#password').type('admin');
cy.contains('Continue').click();

  })
})
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});