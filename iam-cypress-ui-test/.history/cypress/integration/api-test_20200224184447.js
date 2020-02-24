
var val, val2;
describe('Login User Portal', () => {
    
        it('Validate user create sucessfully.', () => {
    
            cy.signIn().then((response) => {
            expect(response.status).to.eq(201);
             
      
        })
    })

    it('Log in to User portal with valid credentials.', () => {
    
        cy.fixture('user-create').then((createUserJson) => {
        Object.keys(createUserJson).forEach(key => {
                    if (key == "userName" ) {
                       val2=  createUserJson[key];     
                    }
                    
                    if (key == "password" ) {
                       val=  createUserJson[key];              
                    }
                    
            })
             
            //Visit WSO2 User-Portal Login Page
            cy.visit(' https://localhost:9443/user-portal/')
            //Validate product-title
            cy.title().should('eq', 'WSO2 Identity Server');
            cy.get('ui header').should.contains(' Sign In');

            cy.contains('Continue').click();
           
            
            
           // cy.pause()
            
            //Enter uUsername & password
            cy.get('input[name="username"]').should('have.attr', 'placeholder', 'Username').type(val2);
            cy.get('input[name="password"]').should('have.attr', 'placeholder', 'Password').type(val);
           
            cy.contains('Continue').debug().click();
               
               // cy.log("*(*(*(("+val+"fertr "+val2);
                
                
         
  
    })
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