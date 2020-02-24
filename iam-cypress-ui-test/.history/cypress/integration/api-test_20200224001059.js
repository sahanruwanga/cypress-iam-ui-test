let state;
let response;
let val;
describe('CRA', () => {
    it('Main test', () => {
     
        cy.signIn() 
          
         
       
      
        .then((response) => {
          
          state=JSON.parse(JSON.stringify(response.body));
       
          cy.log('NNNNNN'+state);
          Object.keys(state).forEach(key => {
          if(key=="userName"){
                return val= state[key];
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