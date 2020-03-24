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


  Cypress.Commands.add('loginSCIM', (user, password, base64, data) => {
    return cy
    .request({
        url: '/scim2/Users',
        method: 'POST',
        auth:
        {
            'username': user,
            'password': password,
        },
        headers:
        {
            'Authorization': 'Basic ' + base64,
            'Content-Type': 'application/json'
        },
        body: data


    })
  })
  Cypress.Commands.add('signIn', function () {
    // chain onto the existing sets so that the subject
    // is not reset when attempting to consume the subject
    // from this custom command
    cy.clearCookies()
    cy.clearLocalStorage()
  
    return cy
    .request({
                    method: 'POST',
                    url: '/scim2/Users',
                    auth:
                    {
                        'username' : 'admin',
                        'password' : this.password,
                    },
                    headers:
                    {
                        'Authorization': 'Basic YWRtaW46YWRtaW4hIWNpYW1Ad3NvMg==',
                        'Content-Type': 'application/json'
                    },
                    body: this.data
                    
                    
                })

  });