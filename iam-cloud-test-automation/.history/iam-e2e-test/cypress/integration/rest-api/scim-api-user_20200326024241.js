class LandingPage {
    createSCIMUser(user, password, base64, data){
     cy
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
                      'Authorization': 'Basic '+base64,
                      'Content-Type': 'application/json'
                  },
                  body: data
                  //'{"schemas":[], "name":{"familyName":"Automation","givenName":"Testuser"}, "userName":"Scimtestuser", "password":"wso2@123", "emails":[{  "primary":true,"value":"test.auto@gmail.com","type":"home"}, {"value":"autotestwork@wso2.com","type":"work"}, {"value":"wso2iamtest@gmail.com"}]}'
  
  
              }).then((response) => {
                cy.log('Response' +JSON.stringify(response));
            //    // return response;
          })
    }
    
    getinItialLocators(){
        
       cy.title().should('eq',loadingPageLocators.pagetitle);
       loadingPageLocators.project_title();
       
       if(loadingPageLocators.form_title()){
       loadingPageLocators.create_user().debug().click();;
       }
    }
   
  
   
  }
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
   
     //   expect(err.message).to.include('Ignoring error for now');
    console.log('Cypress detected uncaught exception', err);
    debugger
    return false;
  });
  export default LandingPage