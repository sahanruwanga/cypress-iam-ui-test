


describe('User CURD with SCIOM 2.0/user  REST API', function () {
  const url = '/scim2/Users';
  before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/user-portal');

  })

  beforeEach(function () {
    cy.fixture('new-user').as("user");
    // // Preserve the cookies for all tests in this suite
    //  Cypress.Cookies.preserveOnce('SESSION')
    // cy.fixture('scim-user-creste').then((data) =>{
    //   this.data=data
    // })


    cy.fixture('scim-user-creste').then((data) => {
      this.data = data
    })

    // cy.fixture('new-user').then((user) => {
    //     this.userName = user.username;
    //     this.password = user.password;



    // })

  })

  it('1. Create new User', function () {
    cy.clearCookies();
    cy.clearLocalStorage();

    let base64Encode;
    cy.get('@user')
      .then(user => {
        base64Encode = cy.base64encode(user.adminuser, user.adminupword);

        return cy
          .request({
            method: 'POST',
            url: '/scim2/Users',
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
            body: this.data


          }).then((response) => {
            expect(response.status).to.eq(201);
            const rbody= response.body;
           return rbody;
          })
      })
      cy.log(rbody);

  });

  // let base64Encode;
  // cy.get('@user')
  //   .then(user => {
  //     base64Encode = cy.base64encode(user.adminuser, user.adminupword);

  // return cy
  // .request({
  //                 method: 'POST',
  //                 url: url,
  //                 auth:
  //                 {
  //                     username: user.adminuser,
  //                     password: user.adminupword,
  //                 },
  //                 headers:
  //                 {
  //                     'Authorization': base64Encode,
  //                     'Content-Type': 'application/json'
  //                 },
  //                 body: this.data


  //             }).then((response) => {
  //               expect(response.status).to.eq(201);
  //             })
  //           })        

  // });
  it('2. Get new User', function () {
    // return cy
    // .request({
    //                 method: 'GET',
    //                 url: '/scim2/Users',
    //                 auth:
    //                 {
    //                     username: jsonUser.userName,
    //                     password: jsonUser.password,
    //                 },
    //                 headers:
    //                 {
    //                     'Authorization': 'Basic YWRtaW46YWRtaW4=',
    //                     'Content-Type': 'application/json'
    //                 }
                   
                    
                    
                    
    //            // }).then(function(response) {
    //         })
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