// <reference types="Cypress" />


//LOCATORS
const CREATE_USER = 'Proceed to Self Register';
const SIGNIN_FORM_TITLE = 'Start Signing Up';
const FORM_TITLE_LOCATOR = 'h3';
const USER_NAME_LABEL  = 'Enter your username here';
const USER_NAME_INPUT = 'input#usernameUserInput';
const NEWUSER_FORM_LOCATORS = 'h2';
const NEWUSER_FORM = 'Create New Account';
const NEWUSER_FORM_LABEL = 'Fill in the form below to complete registration';
const FIRST_NAME = 'input[name="http://wso2.org/claims/givenname"]';


//METHODS TO GET LOCATORS
const sr_form_title = () => cy.get(FORM_TITLE_LOCATOR).invoke("text").then((text) => {
  expect(text.trim()).equal(SIGNIN_FORM_TITLE);
});
const username_label = () => cy.contains(USER_NAME_LABEL);

const enater_new_username = () => cy.get(USER_NAME_INPUT);
const create_user = () => cy.contains(CREATE_USER);
const newuser_form_title = () => cy.get(NEWUSER_FORM_LOCATORS).invoke("text").then((text) => {
  expect(text.trim()).equal(NEWUSER_FORM);
});

const new_user_form_label = () => cy.contains(NEWUSER_FORM_LABEL);
const first_name = () => cy.get(FIRST_NAME).debug().clear().contains('required');


//EXPORT METHODS 
module.exports = { 
  first_name : FIRST_NAME, create_user,  enater_new_username , sr_form_title , username_label , newuser_form_title , new_user_form_label , first_name  }