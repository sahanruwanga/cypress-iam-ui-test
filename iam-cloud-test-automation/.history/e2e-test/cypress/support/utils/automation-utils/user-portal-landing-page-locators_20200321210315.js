

const PAGE_TITLE = 'WSO2 Identity Server';

const landingPageTitle = () => cy.title().should('e');

//EXPORT METHODS 
module.exports = { landingPageTitle}
exports.pageTitle = PAGE_TITLE;