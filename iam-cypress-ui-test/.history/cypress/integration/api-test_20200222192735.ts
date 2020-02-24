let logs = '';
let state;
describe('Login API Test - Correct user login', () => {
    const extractedUrl:string = '';
    
   // it('Validate the header', () => {
    
   cy.request(
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
        }).then((response) => {
            // expect(response.body).to.exist // true
            // expect(response.body).('User.Access: Exception occured:User.Access : CheckUser: Exception occurred:Error with Authentication Header. result =') // true
            // expect(response.headers).should.contain('text/plain; charset=utf-8')
            expect(response.status).to.eq(201)
           // response.status.should('eq','201')
            //expect(response).to.have.property('headers')
           // expect(response.body).to.have.property('userName', 'kim')
            const target = JSON.stringify(response.body)
           // cy.log('Token generated: ' + target)
            state=target;
return  state;
        //    return target // I added this return
        //    logs = target;
        })
      
        
    
    }

    

//)}
);
describe('test 2', () => {
    it('reports state', () => {
        cy.log('Token generated: '+ state); // logs "hi" to the Cypress log panel
     });
});

// it('Validate the header', () => {

//     cy.get(target)
// });
    