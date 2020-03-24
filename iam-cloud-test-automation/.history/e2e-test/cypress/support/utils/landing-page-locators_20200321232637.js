// <reference types="Cypress" />


//LOCATORS
const PAGE_TITLE  = 'WSO2 Identity Server';
const PRODUCT_TITLE_LOCATOR = '.product-title-text';
const PRODUCT_TITLE = 'Identity Server';

//METHODS TO GET LOCATORS
const priject_title_locator = () => cy.get(PRODUCT_TITLE_LOCATOR).shoud('eq',PRODUCT_TITLE);


//EXPORT METHODS 
module.exports = { 
  priject_title_locator , pagetitle : PAGE_TITLE , priject_title :PRODUCT_TITLE }
