// <reference types="Cypress" />


//LOCATORS
const CREATE_USER = 'Create Account';
const FORM_TITLE = 'Sign In';
const FORM_TITLE_LOCATOR = 'h3';
const PAGE_TITLE  = 'WSO2 Identity Server';
const PROJECT_TITLE = 'Identity Server';
const PROJECT_TITLE_LOCATOR = 'h1';


//METHODS TO GET LOCATORS

const project_title = () => cy.get(PROJECT_TITLE_LOCATOR).invoke("text").should("eq", PROJECT_TITLE);
const form_title = () => cy.get(FORM_TITLE_LOCATOR).invoke("text").then((text) => {
  expect(text.trim()).equal(FORM_TITLE);
});
const create_user = () => cy.contains(CREATE_USER);

//EXPORT METHODS 
module.exports = { 
  create_user , form_title , project_title , pagetitle : PAGE_TITLE}
