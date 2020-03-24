


describe('User CURD with SCIOM 2.0/user  REST API', function () {
  const url = 'https://cloud.kubesb.com/user-portal';
before(() => {

    cy.visit(url);
    
 })

  beforeEach(function () {
    cy.fixture('new-user').as("user");
    // Preserve the cookies for all tests in this suite
   // Cypress.Cookies.preserveOnce('SESSION')


  })

  it('1. Create new User', function () {
    cy.get('@user')
        .then(user => {
         cy.log(cy.base64encode(user.adminuser,user.adminupword)) ;
          
        });
    
    
   // cy.visit(url);
    // return cy
    // .request({
    //                 method: 'POST',
    //                 url: '/scim2/Users',
    //                 auth:
    //                 {
    //                     'username' : this.userName,
    //                     'password' : this.password,
    //                 },
    //                 headers:
    //                 {
    //                     'Authorization': 'Basic YWRtaW46YWRtaW4hIWNpYW1Ad3NvMg==',
    //                     'Content-Type': 'application/json'
    //                 },
    //                 body: this.data
                    
                    
    //             })

  });
  it('2. Create new User', function () {
    cy.log(cy.url());
    // cy.visit(url);
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