/// <reference types="Cypress" />
var val, val2;
var variable = "";
describe('Protected endpoints: role-based testing', () => {

    let user;


    //Method to set the User before visiting the page. 
    //This way app thinks it is already authenticated. 
    const setUser = () => {

        cy.visit('/user-portal');//, {


        cy.clearCookies();
        cy.clearLocalStorage();
    }
    //Method  to authenticate User. 
    //User credentials are taken from separate file (cypress.env.json).

    const addUser = function (user, password, base64, data) {

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
    }

    const getUsers = (user, password, base64, userID) =>
    cy.request({
      url: '/scim2/Users/'+userID,
      method: 'GET',
                auth:
                {
                    'username': user,
                    'password': password,
                },
                headers:
                {
                    'Authorization': 'Basic ' + base64,
                    'Content-Type': 'application/json'
                }
    })



    describe('Role: ADMIN', () => {

        beforeEach(setUser)

        beforeEach(() => {
            cy.fixture('new-user').as("user");
           
            cy.fixture('new-scim-user-create').as("data");
          


        })



        it("Test for the User Creation via SCIM2", function () {

            cy.get('@user')
                .then(user => {
                    let base64Encode = cy.base64encode(user.adminuser, user.adminupword);
                    const userName = user.adminuser;
                    const password = user.adminupword;
                    addUser(userName, password, base64Encode, this.data).then((response) => {
                        cy.writeFile('cypress/fixtures/scim-users.json', response.body)

                    });
                    cy.fixture('scim-users').as("Suser");
                   getUsers(userName, password, base64Encode, this.Suser.id).then((response) => {
                    expect(response.status).to.eq(200);
                   });


                })
        })

    








    })




})

