// <reference types="Cypress" />


//LOCATORS
const FORM_TITLE = 'Sign In';
const FORM_TITLE_LOCATOR = 'h1.ui header'
const PAGE_TITLE  = 'WSO2 Identity Server';
const PRODUCT_TITLE = 'Identity Server';
const PRODUCT_TITLE_LOCATOR = 'h1.product-title-text';
const CREATE_USER_LOCATOR = 'button';
const CREATE_USER = 'Continue';




//METHODS TO GET LOCATORS
const project_title_locator = () => cy.get(PRODUCT_TITLE_LOCATOR).contains(PRODUCT_TITLE);
const form_title_locator = () => cy.get(FORM_TITLE_LOCATOR).contains(FORM_TITLE);
const create_user = () => cy.get(CREATE_USER_LOCATOR).invoke('text').contains(CREATE_USER).debug().click();

//EXPORT METHODS 
module.exports = { 
  create_user , project_title_locator , form_title_locator , pagetitle : PAGE_TITLE , project_title :PRODUCT_TITLE }

