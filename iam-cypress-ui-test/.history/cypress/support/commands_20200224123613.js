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

// before (function(){
//     cy.fixture('user-create').then(function(data){
//         this.data=data
//     })
// })

before('grab generated user data', function (){
    let data = cy.readFile("cypress/fixtures/user-create.json", {log:true, timeout: 4000});
    // data.its('name').should('eq', 'Eliza')
})
let userName;
Cypress.Commands.add('signIn', function () {
    // chain onto the existing sets so that the subject
    // is not reset when attempting to consume the subject
    // from this custom command
    
    return cy
    .request({
                    method: 'POST',
                    url: 'https://localhost:9443/scim2/Users',
                    auth:
                    {
                        username: 'admin',
                        password: 'admin',
                    },
                    headers:
                    {
                        'Authorization': 'Basic YWRtaW46YWRtaW4=',
                        'Content-Type': 'application/json'
                    },
                    body: this.data
                    
                })

  });
