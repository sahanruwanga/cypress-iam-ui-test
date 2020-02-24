///<reference types="cypress"/>
describe('CRA', () => {
    it('Main test', () => {
     
        cy.addUser() 
            .then((response) => {
                // expect(response.body).to.exist // true
                // expect(response.body).('User.Access: Exception occured:User.Access : CheckUser: Exception occurred:Error with Authentication Header. result =') // true
                // expect(response.headers).should.contain('text/plain; charset=utf-8')
                expect(response.status).to.eq(201)
               // response.status.should('eq','201')
                //expect(response).to.have.property('headers')
               // expect(response.body).to.have.property('userName', 'kim')
               state = JSON.stringify(response.body)
              // cy.log('Token generated: ' + state)
               
    return  state;
            //    return target // I added this return
            //    logs = target;
            }) 
            console.log(JSON.stringify(response.body)))
       // cy.log('Token generated: ' + state)
   
})
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
   
     //   expect(err.message).to.include('Ignoring error for now');
    console.log('***********Cypress detected uncaught exception', err);
    debugger
    return false;
  });