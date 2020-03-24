// <reference types="Cypress" />


//LOCATORS
const PAGE_TITLE  = 'WSO2 Identity Server'

//METHODS TO GET LOCATORS
const alertAfterSearchSubmit = () => cy.get(ALERT_AFTER_SEARCH_SUBMIT);


//EXPORT METHODS 
module.exports = { 
  alertAfterSearchSubmit , pagetitle : PAGE_TITLE}
