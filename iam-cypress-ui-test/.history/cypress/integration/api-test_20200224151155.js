// let state;
// let response;
let val, val2;
let key;
// describe('CRA', () => {
    
//     it('Main test', () => {

//         cy.signIn()
// .then((response) => {
//              expect(response.status).to.eq(201);
             
//                 state = JSON.parse(JSON.stringify(response.body));


//                 Object.keys(state).forEach(key => {
//                     if (key == "userName" ) {
//                         val = state[key];
//                     }
                



//                     return val;
// })
//             })

//     });

//     it('Main test 11', () => {


//    cy.log(val);

//     });
// })


    

// Cypress.on('uncaught:exception', (err, runnable) => {
//     // returning false here prevents Cypress from
//     // failing the test

//     //   expect(err.message).to.include('Ignoring error for now');
//     console.log('***********Cypress detected uncaught exception', err);
//     debugger
//     return false;
// });


// describe('Loading single fixture', () => {
//     it('loads', () => {
//         cy.fixture('user-create').then((createUserJson) => {
//       cy.log(createUserJson);
//       Object.keys(createUserJson).forEach(key => {
//                             // if (key == "userName" ) {
//                             //     val = state[key];
//                             // }

//                             cy.log("LLLL"+key+"hdhhdfhh"+city[key]);
      
//     })
// })
//   })
// })

describe('CRA', () => {
    
        it('Main test', () => {
    
            cy.signIn().then((response) => {
            expect(response.status).to.eq(201);
             
      
        })
    })

    it('Main test1', () => {
    
        cy.fixture('user-create').then((createUserJson) => {
                  cy.log(createUserJson);
                  this.key=key
                  Object.keys(createUserJson).forEach(key => {
                        this.val= val=key;
                        this.val2=     val2=  createUserJson[key];              // if (key == "userName" ) {
                                         //     val = state[key];
                                        // }
          
                                       
                  
                })
                
                console.log("*(*(*(("+val+"fertr "+val2);
               
                
                // return this.key=key;
         
  
    })
})
})