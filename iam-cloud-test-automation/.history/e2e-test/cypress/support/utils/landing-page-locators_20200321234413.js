// <reference types="Cypress" />


//LOCATORS
const PAGE_TITLE  = 'WSO2 Identity Server';
const PRODUCT_TITLE_LOCATOR = 'h1.product-title-text';
const PRODUCT_TITLE = 'Identity Server';

//METHODS TO GET LOCATORS
const project_title_locator = () => cy.get(PRODUCT_TITLE_LOCATOR).contains(PRODUCT_TITLE);


//EXPORT METHODS 
module.exports = { 
  project_title_locator , pagetitle : PAGE_TITLE , project_title :PRODUCT_TITLE }
