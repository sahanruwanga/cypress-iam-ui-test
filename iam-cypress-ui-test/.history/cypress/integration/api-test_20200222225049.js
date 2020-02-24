
describe('CRA', () => {
    it('Main test', () => {
     
        cy.addUser() .then(response => 
          
            console.log(JSON.stringify(response.body)))
       // cy.log('Token generated: ' + state)
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