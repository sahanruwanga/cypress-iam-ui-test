describe('CRA', () => {
    it('Main test', () => {
        const token ='XXXX'
        cy.addUser() .then(res => console.log(res))
       // cy.log('Token generated: ' + state)
    })
})
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
   
     //   expect(err.message).to.include('Ignoring error for now');
    console.log('***********Cypress detected uncaught exception', err);
    debugger
    return false;
  });