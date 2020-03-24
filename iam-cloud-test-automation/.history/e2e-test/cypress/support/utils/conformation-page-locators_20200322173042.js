// <reference types="Cypress" />


//LOCATORS
//SELFREGISTRATION-USERPORTAL LOCATORS
const SR_HEADER = 'Information';
const SR_HEADER_LOCATOR = 'h4';
const SR_PARAGRAPH = 'Confirmation link has been sent to your email';
const SR_PARAGRAPH_LOCATOR = 'p';
const SR_CLOSE_BUTTON = 'Close';


        





//METHODS TO GET LOCATORS
//SELFREGISTRATION-USERPORTAL METHODS
const sr_header = () => cy.get(SR_HEADER_LOCATOR).invoke("text").then((text) => {
  expect(text.trim()).equal(SR_HEADER);
});

const sr_paragraph = () => cy.get(SR_PARAGRAPH_LOCATOR).invoke("text").then((text) => {
    expect(text.trim()).equal(SR_PARAGRAPH);
  });
const sr_close_button = () => cy.contains(SR_CLOSE_BUTTON);


//EXPORT METHODS 
module.exports = { 
    sr_header , sr_paragraph , sr_close_button}