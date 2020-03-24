// <reference types="Cypress" />


//LOCATORS
const PAGE_TITLE  = 'WSO2 Identity Server';
const PROJECT_TITLE = 'Identity Server';
const PROJECT_TITLE_LOCATOR = 'h1';
const FORM_TITLE_LOCATOR = 'h3';
const FORM_TITLE = 'Sign In';
const CREATE_USER_LOCATOR = 'button';
const CREATE_USER = 'Create Account';


//METHODS TO GET LOCATORS

const project_title = () => cy.get(PROJECT_TITLE_LOCATOR).invoke("text").should("eq", PROJECT_TITLE);
const form_title = () => cy.get(FORM_TITLE_LOCATOR).invoke("text").then((text) => {
  expect(text.trim()).equal(FORM_TITLE);
});
const create_user = () => cy.contains(CREATE_USER);


// cy.get(CREATE_USER_LOCATOR).invoke("text").then((text) => {
//   expect(text.trim()).equal(CREATE_USER);
// });
// .toString().trim().should("eq", FORM_TITLE);

// cy.get(FORM_TITLE_LOCATOR).contains(FORM_TITLE);
// cy.get("FORM_TITLE_LOCATOR").find('FORM_TITLE_LOCATOR1').invoke('text').then((FORM_TITLE) => {
//   expect(text.trim()).equal('Wildness')
// });
//cy.get(FORM_TITLE_LOCATOR).invoke("text").should("eq", FORM_TITLE);
//cy.get(PROJECT_TITLE_LOCATOR).contains(PROJECT_TITLE);
//


//EXPORT METHODS 
module.exports = { 
  create_user , form_title , project_title , pagetitle : PAGE_TITLE}
