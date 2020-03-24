/// <reference types="Cypress" />

describe('Protected endpoints: role-based testing', () => {

    let user

    //Method to set the User before visiting the page. 
    //This way app thinks it is already authenticated. 
    const setUser = () => {

        cy.visit('/user-portal');//, {

        
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.fixture('scim-user-creste').then(function(data) {
            this.data = data
        })
    }
    //Method  to authenticate User. 
    //User credentials are taken from separate file (cypress.env.json).

    const addUser = function(data) {
   
        cy.get('@user')
            .then(user => {
                let base64Encode = cy.base64encode(user.adminuser, user.adminupword);
                cy.request({
                    url: '/scim2/Users',
                    method: 'POST',
                    auth:
                    {
                        'username': user.adminuser,
                        'password': user.adminupword,
                    },
                    headers:
                    {
                        'Authorization': 'Basic ' + base64Encode,
                        'Content-Type': 'application/json'
                    },
                    body: data
                })
            })

        }



    describe('Role: ADMIN', () => {

        beforeEach(setUser)

        beforeEach(() => {
            cy.fixture('new-user').as("user");
            cy.fixture('scim-user-creste').then((data) => {
              this.data = data
            })
        })



        it("Admin can get /users", function () {

       

             addUser(this.data);
            //  .then((res => {
            //   expect(res.status).to.eq(200)
            // }))

        })








    })




})
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
  
    //   expect(err.message).to.include('Ignoring error for now');
    console.log('Cypress detected uncaught exception', err);
    debugger
    return false;
  });

