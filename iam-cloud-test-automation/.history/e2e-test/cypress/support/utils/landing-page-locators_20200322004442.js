// <reference types="Cypress" />


//LOCATORS
const PAGE_TITLE  = 'WSO2 Identity Server';
const PROJECT_TITLE = 'Identity Server';
const PROJECT_TITLE_LOCATOR = 'h1';
const FORM_TITLE_LOCATOR = 'h3';
const FORM_TITLE = 'Sign In';


//METHODS TO GET LOCATORS
//const alertAfterSearchSubmit = () => cy.get(ALERT_AFTER_SEARCH_SUBMIT);
const project_title = () => cy.get(PROJECT_TITLE_LOCATOR).invoke("text").should("eq", PROJECT_TITLE);
const form_title = () => cy.get(FORM_TITLE_LOCATOR).invoke("text").should("eq", FORM_TITLE);
//cy.get(PROJECT_TITLE_LOCATOR).contains(PROJECT_TITLE);
//


//EXPORT METHODS 
module.exports = { 
  form_title , project_title , pagetitle : PAGE_TITLE}
