


// // describe('User CURD with SCIOM 2.0/user  REST API', function () {

// //   const url = '/scim2/Users';
// //   before(() => {
// //     cy.clearCookies();
// //     cy.clearLocalStorage();
// //     cy.visit('/user-portal');

// //   })

// //   beforeEach(function () {
// //     cy.fixture('new-user').as("user");
// //     // // Preserve the cookies for all tests in this suite
// //     //  Cypress.Cookies.preserveOnce('SESSION')
// //     // cy.fixture('scim-user-creste').then((data) =>{
// //     //   this.data=data
// //     // })


// //     cy.fixture('scim-user-creste').then((data) => {
// //       this.data = data
// //     })

// //     // cy.fixture('new-user').then((user) => {
// //     //     this.userName = user.username;
// //     //     this.password = user.password;



// //     // })

// //   })

// //   it('1. Create new User', function () {
// //     cy.clearCookies();
// //     cy.clearLocalStorage();
// //     var rbody;

// //     let base64Encode;
// //     cy.get('@user')
// //       .then(user => {
// //         base64Encode = cy.base64encode(user.adminuser, user.adminupword);

// //         return cy
// //           .request({
// //             method: 'POST',
// //             url: '/scim2/Users',
// //             auth:
// //             {
// //               'username': user.adminuser,
// //               'password': user.adminupword,
// //             },
// //             headers:
// //             {
// //               'Authorization': 'Basic ' + base64Encode,
// //               'Content-Type': 'application/json'
// //             },
// //             body: this.data


// //           }).then((response) => {
// //             expect(response.status).to.eq(201);
// //             rbody= response.body;
// //             return rbody;
// //           })

// //       })


// //   });

// //   // let base64Encode;
// //   // cy.get('@user')
// //   //   .then(user => {
// //   //     base64Encode = cy.base64encode(user.adminuser, user.adminupword);

// //   // return cy
// //   // .request({
// //   //                 method: 'POST',
// //   //                 url: url,
// //   //                 auth:
// //   //                 {
// //   //                     username: user.adminuser,
// //   //                     password: user.adminupword,
// //   //                 },
// //   //                 headers:
// //   //                 {
// //   //                     'Authorization': base64Encode,
// //   //                     'Content-Type': 'application/json'
// //   //                 },
// //   //                 body: this.data


// //   //             }).then((response) => {
// //   //               expect(response.status).to.eq(201);
// //   //             })
// //   //           })        

// //   // });
// //   it('2. Get new User', function () {
// //     // return cy
// //     // .request({
// //     //                 method: 'GET',
// //     //                 url: '/scim2/Users',
// //     //                 auth:
// //     //                 {
// //     //                     username: jsonUser.userName,
// //     //                     password: jsonUser.password,
// //     //                 },
// //     //                 headers:
// //     //                 {
// //     //                     'Authorization': 'Basic YWRtaW46YWRtaW4=',
// //     //                     'Content-Type': 'application/json'
// //     //                 }




// //     //            // }).then(function(response) {
// //     //         })
// //   })




// // })

// // Cypress.on('uncaught:exception', (err, runnable) => {
// //   // returning false here prevents Cypress from
// //   // failing the test

// //   //   expect(err.message).to.include('Ignoring error for now');
// //   console.log('Cypress detected uncaught exception', err);
// //   debugger
// //   return false;
// // });

// class LandingPage {

//   cresteSCIMUser() {
//     cy.clearCookies();
//     cy.clearLocalStorage();
//     var rbody;

//     let base64Encode;
//     cy.get('@user')
//       .then(user => {
//         base64Encode = cy.base64encode(user.adminuser, user.adminupword);

//         return cy
//           .request({
//             method: 'POST',
//             url: '/scim2/Users',
//             auth:
//             {
//               'username': user.adminuser,
//               'password': user.adminupword,
//             },
//             headers:
//             {
//               'Authorization': 'Basic ' + base64Encode,
//               'Content-Type': 'application/json'
//             },
//             body: this.data


//           }).then((response) => {
//             expect(response.status).to.eq(201);
//             rbody = response.body;
//             return rbody;
//           })

//       })


//   }

//   validateCreateSCIMUser(){
//     this.cresteSCIMUser().then((response => {
//       expect(response.status).to.eq(201);
//       let rbody = response.body;
//       cy.log(rbody);

//   }

//   }
// Cypress.on('uncaught:exception', (err, runnable) => {
//   // returning false here prevents Cypress from
//   // failing the test

//   //   expect(err.message).to.include('Ignoring error for now');
//   console.log('Cypress detected uncaught exception', err);
//   debugger
//   return false;
// });
// export default LandingPage

/// <reference types="Cypress" />
let base64Encode;
describe("Test simple Flask app API", () => {

  //TODO - change url so that it can work without baseUrl in cypress json 
  //const baseUrl = 'https://flask-rest-api-demo.herokuapp.com'

    before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/user-portal');

  })

  beforeEach(function () {
    cy.fixture('new-user').as("user");
    // // Preserve the cookies for all tests in this suite
    //  Cypress.Cookies.preserveOnce('SESSION')
    cy.fixture('scim-user-creste').then((data) => {
      this.data = data;
      return data;
    })
 })

// const getUsers = () =>
//     cy.request({ url: '/users' }).its('body.users');

  
    const addUser = (user, password, base64,data) =>
    
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
    }).its('body')
      .then((res) => {
        user = res
      })
  // const deleteUser = user =>
  //   cy.request({
  //     url: `/users/${user.username}`,
  //     method: 'DELETE'
  //   }).then((res) => {
  //     expect(res.status).to.eq(200)
  //   })

  // const deleteAllUsers = () => {
  //   getUsers().each(deleteUser)
  // }

  // const reset = () => {
  //   deleteAllUsers();
  //   addInitialUsers();


  // }

  // //after and before hooks
  // beforeEach(reset)
  // //afterEach(reset)

  it('Initial 2 Users are loaded', () => {
    this.data = data;
    //getUsers().should('have.length', 2)
    cy.clearCookies();
  cy.clearLocalStorage();
  cy.get('@user')
    .then(user => {
      base64Encode = cy.base64encode(user.adminuser, user.adminupword);
      const userName = user.adminuser;
      const password = user.adminupword;

    addUser(userName,password,base64Encode,data);
    })
  })
})  

//   it('Each user has expected properties', () => {
//     getUsers().each(value =>
//       expect(value).to.have.all.keys('id', 'username', 'password'))
//   })

//   it('Returns JSON', () => {
//     cy.request('/users').its('headers').its('content-type').should('include', 'application/json')
//   })

//   //Test which adds a new User and deletes it. 
//   it('Adds User and deletes the same User', () => {

//     const randomNumber = Cypress._.random(0, 10000);
//     const user = { "username": "user" + randomNumber, "password": "1234" + randomNumber };

//     addUser(user);
//     getUsers().then((res) => {
//       //Assert Users array length to verify if new User was added
//       expect(res).have.length(3);
//       //Assert property of the last User (username) in the array, 
//       //to verify if it is in accordance with the new user property. 
//       expect(res.slice(-1)[0]).have.property('username', user.username)
//     })

//     deleteUser(user);
//     getUsers().then((res) => {
//       //Assert Users array length to verify if new User was removed
//       expect(res).have.length(2);
//       //Assert property of the last User (username) in the array, 
//       //to verify if it is't in acchoradnce with the new user property. 
//       expect(res.slice(-1)[0]).not.have.property('username', user.username)
//     })
//   })

//   it("Doesn't accept duplicated Users", () => {

//     const user = { "username": "user", "password": "1234" };

//     addUser(user);
//     //Add the same user (user) again and assert if request failes (status code:400)
//     cy.request({
//       url: '/register',
//       method: 'POST',
//       body: user,
//       failOnStatusCode: false
//     }).then((res => {
//       expect(res.status).to.eq(400)
//     }))
//     //Asserts length of the array of users to verify
//     //if duplicated user wasn't added
//     getUsers().then((res => {
//       expect(res).have.length(3);
//     }))
//   })
// })
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test

  //   expect(err.message).to.include('Ignoring error for now');
  console.log('Cypress detected uncaught exception', err);
  debugger
  return false;
});