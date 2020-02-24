let state;
let response;
let val, val2;
describe('CRA', () => {
    before (function(){
        cy.fixture('user-create').then(r => {
            Object.keys(r).forEach(key => {
          
              cy.log(key.userName);
            })
          })
        });
    it('Main test', () => {

        cy.signIn()
.then((response) => {
             expect(response.status).to.eq(201);
             
                state = JSON.parse(JSON.stringify(response.body));


                Object.keys(state).forEach(key => {
                    if (key == "userName" ) {
                        val = state[key];
                    }
                



                    return val;
})
            })

    });

    it('Main test 11', () => {


   cy.log(val);

    });
})

// describe('Testing WSO2 Identity Server Login Page', () => {
//     it('Perform Login',() =>{
    
        
       
//     //Visit WSO2 User-Portal Login Page
//     cy.visit(' https://is510B.qa.com:443/t/wso2.com/user-portal/')
//     cy.title().should('eq', 'WSO2 Identity Server')
//     cy.contains('Continue').click();
//     cy.contains('Continue').click();
    
    
//    // cy.pause()
    
//     //Enter uUsername & password
//     cy.get('#username').should('have.attr', 'placeholder', 'Username').type(val);
//     cy.should('have.value', this.data.userName)
//     //cy.get('#username').clear()
    
//     cy.get('#password').type(this.data.password);
//     cy.should('have.value', 'admin')
//     cy.contains('Continue').debug().click();
//     //cy.get('.product-title-text').should('eq','User Portal')
//     //cy.get('h1').invoke('text').should('eq', 'User Portal');
//     // cy.get('h1').find('.product-title-text').invoke('text').then(($text => {
        
//     //     expect(text.trim()).
//     // }));
    
    
//         // cy.get('[class="product-title-text"]')
        
//         // .should(($div) => {
//         //     expect($div.text().trim()).equal('Identity Server');
//         //   });
        
//         //   cy.contains('Continue').debug().click();
       
        
    
    
    
//       })
//     })
    

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test

    //   expect(err.message).to.include('Ignoring error for now');
    console.log('***********Cypress detected uncaught exception', err);
    debugger
    return false;
});