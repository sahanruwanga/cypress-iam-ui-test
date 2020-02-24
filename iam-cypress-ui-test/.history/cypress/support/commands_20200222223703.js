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
let state;
Cypress.Commands.add('addUser', () => {
 
 
   // it('Validate the header', () => {
    
      //return cy.chain()
      return cy.request(
            {
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
            body: {
                                "schemas":[],
                                "name":{"familyName":"jackson","givenName":"kim"},
                                "userName":"kimm","password":"kimwso2",
                                "emails":[{
                                    "primary":true,
                                    "value":"kim.jackson@gmail.com",
                                    "type":"home"
                                },
                                {
                                    "value":"kim_j@wso2.com",
                                    "type":"work"}
                                ]
                              }
        }).its("body")
        .then((response) => {
            // expect(response.body).to.exist // true
            // expect(response.body).('User.Access: Exception occured:User.Access : CheckUser: Exception occurred:Error with Authentication Header. result =') // true
            // expect(response.headers).should.contain('text/plain; charset=utf-8')
            expect(response.status).to.eq(201)
           // response.status.should('eq','201')
            //expect(response).to.have.property('headers')
           // expect(response.body).to.have.property('userName', 'kim')
           state = JSON.stringify(response.body)
          // cy.log('Token generated: ' + state)
           
return  state;
        //    return target // I added this return
        //    logs = target;
        }) 
       
    }
    

    

//)}
);