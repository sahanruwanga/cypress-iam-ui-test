class LandingPage {
    // getLogoAltAttributes(logoContainer, attributeName, logoType = '/') {
    //   // This function takes parent container name, logo type and attribute name
    //   // as parameter and return attribute value
    //   return cy.get(logoContainer).find(`a[href="${logoType}"]>img`).invoke('attr', attributeName)
    // }
  
    // getFooterNavItems() {
    //   return cy.get('footer .nav-item .nav-link')
    // }
  
    // getUserEmail() {
    //   return cy.get('header .navbar #pgn__dropdown-trigger-0').invoke('text')
    // }
  
    // enterpriseListContainer() {
    //   return cy.get('.enterprise-list')
    // }
  
    // getEnterpriseList() {
    //   return cy.get('.enterprise-list td a')
    // }
  
    // searchEnterprise(enterpriseName) {
    //   cy.server()
    //   cy.route(`**search=${enterpriseName}**`).as('results')
    //   cy.get('input[type="search"]').clear().type(`${enterpriseName}{enter}`)
    //   cy.wait('@results')
    // }
  
    // goToEnterprise(enterpriseName) {
    //   // Open target enterprise page
    //   cy.get('.enterprise-list td>a').contains(enterpriseName).click()
    //   // Wait for page to load properly by verifying that dashboard cards are visible
    //   cy.get('.card').should('be.visible')
    // }
  
    // logoutUser() {
    //   cy.get('header .navbar .dropdown-toggle')
    //     .should('have.attr', 'aria-expanded', 'false')
    //     .click()
    //     .should('have.attr', 'aria-expanded', 'true')
    //   cy.get('header .navbar .dropdown-item')
    //     .contains('Logout')
    //     .click()
    // }
  
    // openCodeManagement() {
    //   cy.get('.nav-item:nth-of-type(2) .text-secondary.rounded-0').trigger('mouseover').click().trigger('mouseout')
    //   cy.get('.d-flex.expanded.has-shadow').should('not.be.visible')
    // }

    getPageTitle(){
        var { pagetitle } = require('/Users/niluka/WSO2/cypressTestUI/iam-cloud-test-automation/e2e-test/cypress/support/utils/landing-page-locators.js');
        
        describe('Product Page tests', () => {
            it('Product Page: Verify if size input field has pre-selected option', () => {
                cy.log(pagetitle);
            })
          })
    }
  }
  
  export default LandingPage