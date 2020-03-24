/// <reference types="Cypress" />

context.skip('Protected endpoints: role-based testing', () => {

    let user
  
    //Method to set the User before visiting the page. 
    //This way app thinks it is already authenticated. 
    const setUser = () => {
      cy.visit('/user-portal', {
        onBeforeLoad(win) {
          // and before the page finishes loading
          // set the user object in local storage
          win.localStorage.setItem('user', JSON.stringify(user))
        },
      })
    }
    //Method  to authenticate User. 
    //User credentials are taken from separate file (cypress.env.json).
    const authenticateUser = (userRole) =>
      cy.request({
        url: 'http://localhost:4000/users/authenticate',
        method: 'POST',
        body: Cypress.env(userRole)
      }).its('body')
        .then((res) => {
          user = res
        })
  
  
    describe('Role: ADMIN', () => {
  
      before(() => {
        authenticateUser('admin')
      })
      beforeEach(setUser)
  
      it("Admin can get /users", () => {
        getUsers().then((res => {
          expect(res.status).to.eq(200)
        }))
      })
  
      
  
      it('/users array contains expected number of elements', () => {
        getUsers().its('body').should('have.length', 2)
      })
  
      
      
     
    })
  
  
  
    
  })
  
  