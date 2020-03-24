// <reference types="Cypress" />


//LOCATORS
const FORM_TITLE = 'Sign In';
const FORM_TITLE_LOCATOR = 'h1.ui header'
const PAGE_TITLE  = 'WSO2 Identity Server';
const PRODUCT_TITLE = 'Identity Server';
const PRODUCT_TITLE_LOCATOR = 'h1.product-title-text';




//METHODS TO GET LOCATORS
const project_title_locator = () => cy.get(PRODUCT_TITLE_LOCATOR).contains(PRODUCT_TITLE);
const form_title_locator = () => cy.get(FORM_TITLE_LOCATOR).contains(FORM_TITLE);


//EXPORT METHODS 
module.exports = { 
  project_title_locator , form_title_locator , pagetitle : PAGE_TITLE , project_title :PRODUCT_TITLE }
