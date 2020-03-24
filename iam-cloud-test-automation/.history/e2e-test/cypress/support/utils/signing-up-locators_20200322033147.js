// <reference types="Cypress" />


//LOCATORS
const CREATE_USER = 'Proceed to Self Register';
const FORM_TITLE = 'Start Signing Up';
const FORM_TITLE_LOCATOR = 'h3';
const USER_NAME_LABEL  = 'Enter your username here';
const USER_NAME_INPUT = 'input#usernameUserInput';
const USER_NAME_INPUT = 'input#usernameUserInput';

//METHODS TO GET LOCATORS
const sr_form_title = () => cy.get(FORM_TITLE_LOCATOR).invoke("text").then((text) => {
  expect(text.trim()).equal(FORM_TITLE);
});
const username_label = () => cy.contains(USER_NAME_LABEL);

const enater_new_username = () => cy.get(USER_NAME_INPUT);
const create_user = () => cy.contains(CREATE_USER);

//EXPORT METHODS 
module.exports = { 
    create_user,  enater_new_username , sr_form_title , username_label  }