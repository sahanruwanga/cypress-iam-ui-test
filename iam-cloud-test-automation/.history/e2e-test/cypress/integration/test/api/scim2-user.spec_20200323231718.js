/// <reference types="Cypress" />
var val, val2;
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

    const addUser = (user, password, base64, data) =>
    
       cy.request({
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
       
    
    });




    describe('Role: ADMIN', () => {

        beforeEach(setUser)

        beforeEach(() => {
            cy.fixture('new-user').as("user");
            // cy.fixture('scim-user-creste').then((data) => {
            //   this.data = data
            // })
            cy.fixture('scim-user-creste').as("data");
                
           
        })



        it("Admin can get /users", function () {

            
            // addUser().then((res => {
            //   expect(res.status).to.eq(200)
            // }))
                  cy.get('@user')
            .then(user => {
             let base64Encode = cy.base64encode(user.adminuser, user.adminupword);
              const userName = user.adminuser;
              const password = user.adminupword;
             let newSCIMUSER= addUser(userName,password,base64Encode,this.data).then((response) => {
                // cy.log(`Response = ${JSON.stringify(response)}`)
                cy.log("+++++kkkk++"+newSCIMUSER);  
                cy.log('Response' + JSON.stringify(response.body));
                console.log('Response' + JSON.stringify(newSCIMUSER.body));
             })

             cy.log("+++++kkkk++"+newSCIMUSER);  
             cy.log('Response' + JSON.stringify(newSCIMUSER));
             console.log('Response' + JSON.stringify(newSCIMUSER));
                //cy.log("+++++++"+jsonUser.id);
            //     Object.keys(newSCIMUSER).forEach(key => {
            //         if (key == "id" ) {
            //            val2=  newSCIMUSER[key];  
            //            cy.log("+++++++"+val2);   
            //         }
                    
            //         if (key == "password" ) {
            //            val=  newSCIMUSER[key];              
            //         }
            //       cy.log("+++++++"+val2);  
            // })
            // cy.log("+++++kkkk++"+val2);  
            
        })
        })








    })




})

