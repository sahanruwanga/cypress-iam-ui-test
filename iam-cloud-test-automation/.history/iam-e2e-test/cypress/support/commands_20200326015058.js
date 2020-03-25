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


beforeEach(() => {
    cy.fixture('new-user').as("user");
})

Cypress.Commands.add('base64encode', () => {
    cy.get('@user')
        .then(user => {

            const userName = user.adminuser;
            const password = user.adminupword;
            let data = userName + ':' + password;
            let buff = new Buffer(data);
            let base64data = buff.toString('base64');

        })
})

// //Log in to user account
Cypress.Commands.add('login', () => {
    cy.get('@user')
        .then(user => {

            const userName = user.username;
            const password = user.password;

            cy.get('#usernameUserInput').should('have.attr', 'placeholder', 'Username').type('Niluka');
            cy.get('#password').type('1qa2ws');
            //+'{enter}', {force: true});

            cy.contains('Continue').click();
            //cy.wait(3000);
        })
})







var userName;
var password = null;
var data = null;
var target = null;
var userID;
var jsonUser1 = null;
// cy.fixture('new-scim-user-create').then((data) =>{
//     //     this.data=data
//     // })

//     // cy.fixture('new-user').then((user) => {
before(function () {
    cy.fixture('new-scim-user-create').then((data) => {
        this.data = data
    })

    cy.fixture('new-user').then((user) => {
        this.userName = user.adminuser;
        this.password = user.adminupword;



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
                'username': this.userName,
                'password': this.password,
            },
            headers:
            {
                'Authorization': 'Basic YWRtaW46YWRtaW4hIWNpYW1Ad3NvMg==',
                'Content-Type': 'application/json'
            },
            body: this.data


        })

});

Cypress.Commands.add('getMeSCIM', function () {
    // chain onto the existing sets so that the subject
    // is not reset when attempting to consume the subject
    // from this custom command
    cy.clearCookies()
    cy.clearLocalStorage()
    // cy.log("))))))))"+this.data);


    // prints an object to console

    jsonUser = JSON.parse(JSON.stringify(this.data));
    return cy
        .request({
            method: 'GET',
            url: '/scim2/Me',
            auth:
            {
                username: jsonUser.userName,
                password: jsonUser.password,
            },
            headers:
            {
                'Authorization': 'Basic YWRtaW46YWRtaW4=',
                'Content-Type': 'application/json'
            }




            // }).then(function(response) {
        }).then((response) => {
            expect(response.status).to.eq(200);

            const rbody = response.body;
        })
});

Cypress.Commands.add('deleteMeSCIM', function () {
    var userID;
    cy.getMeSCIM().then((response) => {
        expect(response.status).to.eq(200);


        const rbody = response.body;
        this.userID = rbody.id;
    })

    cy.clearCookies()
    cy.clearLocalStorage()

    jsonUser = JSON.parse(JSON.stringify(this.data));

    return cy
        .request({


            method: 'DELETE',
            url: '/scim2/Users/' + userID,
            auth:
            {
                username: jsonUser.userName,
                password: jsonUser.password,
            },
            headers:
            {
                'Authorization': 'Basic YWRtaW46YWRtaW4=',
                'Content-Type': 'application/json'
            }


        }).then((response) => {
            expect(response.status).to.eq(204);

        })

});




