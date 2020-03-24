// <reference types="Cypress" />


//LOCATORS
const PAGE_TITLE  = 'WSO2 Identity Server';
const PROJECT_TITLE = 'Identity Server';
const PROJECT_TITLE_LOCATOR = 'h1.product-title-text';


//METHODS TO GET LOCATORS
//const alertAfterSearchSubmit = () => cy.get(ALERT_AFTER_SEARCH_SUBMIT);
const project_title = () => cy.get(PROJECT_TITLE_LOCATOR).contains(PROJECT_TITLE);
//cy.get(PROJECT_TITLE_LOCATOR).invoke("text").should("eq", PROJECT_TITLE);


//EXPORT METHODS 
module.exports = { 
  project_title , pagetitle : PAGE_TITLE}
