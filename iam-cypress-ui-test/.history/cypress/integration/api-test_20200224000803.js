let state;
let response;
let val;
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
          Object.keys(state).forEach(key => {
           // cy.log(key + ' - ' + state[key]) // key - value
            if(key=="userName"){
                 val= state[key];
               
            }

            
            cy.log(val)
        })
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