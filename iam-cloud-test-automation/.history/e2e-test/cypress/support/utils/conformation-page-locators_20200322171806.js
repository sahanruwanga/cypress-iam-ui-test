// <reference types="Cypress" />


//LOCATORS
//SELFREGISTRATION-USERPORTAL LOCATORS
const SR_HEADER = 'Information';
const SR_HEADER_LOCATOR = 'h4';





//METHODS TO GET LOCATORS
//SELFREGISTRATION-USERPORTAL METHODS
const sr_header = () => cy.get(SR_HEADER_LOCATOR).invoke("text").then((text) => {
  expect(text.trim()).equal(SR_HEADER);
});
const username_label = () => cy.contains(USER_NAME_LABEL);

const enater_new_username = () => cy.get(USER_NAME_INPUT);
const create_user = () => cy.contains(CREATE_USER);
const newuser_form_title = () => cy.get(NEWUSER_FORM_LOCATORS).invoke("text").then((text) => {
  expect(text.trim()).equal(NEWUSER_FORM);
});

const new_user_form_label = () => cy.contains(NEWUSER_FORM_LABEL);
const first_name = () => cy.get(FIRST_NAME);
const last_name = () => cy.get(LAST_NAME);
const password = () => cy.get(PASSWORD);
const email = () => cy.get(EMAIL);
const oraganization = () => cy.get(ORGANIZATION);
const telephone = () => cy.get(TELEPHONE);
const im = () => cy.get(IM);
const country = () => cy.get(COUNTRY);
const mobile = () => cy.get(MOBILE);
const url = () => cy.get(URL);
const check_policy = () => cy.get(CHECK_POLICY).not('[disabled]')
  .check().should('be.checked')
const register_user = () => cy.contains(REGISTER);  
//should('have.attr', 'required')

// const first_name = () => cy.get('input')
//   .find('input')
//   .contains('required');


//EXPORT METHODS 
module.exports = { 
  register_user, check_policy, url, mobile, country, im, telephone, oraganization,  email, password , last_name , first_name : FIRST_NAME, 
  create_user,  enater_new_username , 
  sr_form_title , username_label , newuser_form_title , new_user_form_label , first_name  }