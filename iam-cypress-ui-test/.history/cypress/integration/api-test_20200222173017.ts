
describe('Login API Test - Correct user login', () => {

    it('Validate the header', () => {
    
        cy.request({
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
            // expect(response.body).statusCode.should.equal(400)
            response.status.should.equal(201)
            //expect(response).to.have.property('headers')
        })
    
    })}
);
    