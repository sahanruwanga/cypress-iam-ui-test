let state;
let response;
describe('CRA', () => {
    it('Main test', () => {
     
        cy.signIn() 
          
         
       
      
        .then((response) => {
           // state= JSON.stringify(response.body);
          // cy.log('Token generated: ' + state)
          // expect(state).to.have.property('userName', 'Jane') // true
          state=JSON.parse(JSON.stringify(response.body));
        //  state = JSON.parse(response.body);
          cy.log('NNNNNN'+state);
            
        })
       
    });
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
   
     //   expect(err.message).to.include('Ignoring error for now');
    console.log('***********Cypress detected uncaught exception', err);
    debugger
    return false;
  });