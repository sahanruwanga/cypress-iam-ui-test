describe('CRA', () => {
    it('shows learn link', function () {
        cy.visit(' https://is510B.qa.com:443/t/wso2.com/user-portal/')
        // cy.get('.App-link').should('be.visible')
        //     .and('have.text', 'Learn React')
        cy.title().should('eq', 'WSO2 Identity Server')
    })
})