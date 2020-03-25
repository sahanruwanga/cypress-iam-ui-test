// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import 'cypress-file-upload';



import * as userAccountPageLocators from './utils/landing-page-locators'

Cypress.Commands.add('base64encode', (username, password) => {

    let data = username + ':' + password;
    let buff = new Buffer(data);
    let base64data = buff.toString('base64');
})

//Log in to user account
Cypress.Commands.add('login', (username, password) => {
  

    cy.get('#usernameUserInput').should('have.attr', 'placeholder', 'Username').type(username);
    cy.get('#password').type(password);

    cy.contains('Continue').click();
})


