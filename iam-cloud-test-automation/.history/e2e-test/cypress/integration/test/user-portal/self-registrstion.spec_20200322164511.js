
import LandingPage from '../../pages/landing_page'
import * as SelfSignPageLocators from '../../../support/utils/signing-up-locators.js'

describe('Login tests', function () {
  const landingPage = new LandingPage()

  // before(function () {
  //   cy.clearCookies()
  // })

  // before(function() {
  //   cy.visit('/user-portal');

  // });
  before(() => {

    cy.visit('/user-portal');
    cy.clearCookies();

  })

  beforeEach(function () {
    cy.fixture('new-user').as("user");
    // Preserve the cookies for all tests in this suite
    Cypress.Cookies.preserveOnce('SESSION')


  })

  it('1. validate Loading Page', function () {

    landingPage.getinItialLocators();
  })


  it('2. Enter a new user name & Start Procees', function () {
    // validate form title in self-signin page
    if (SelfSignPageLocators.sr_form_title() && SelfSignPageLocators.username_label) {

      cy.get('@user')
        .then(user => {
          SelfSignPageLocators.enater_new_username().debug().clear().type(user.username);
          SelfSignPageLocators.create_user().debug().click();
        });
    }

  });

  it('3. Enter a new user Profile Details and Register', function () {
    // validate form title in self-signin page
    if (SelfSignPageLocators.newuser_form_title() && SelfSignPageLocators.new_user_form_label) {

      cy.get('@user')
        .then(user => {
       //const firstName =  cy.get(SelfSignPageLocators.first_name).clear();

       SelfSignPageLocators.
       first_name().debug().clear().type(user.firstName).should('have.attr', 'required')
       SelfSignPageLocators.
       last_name().debug().clear().type(user.lastName).should('have.attr', 'required');
       SelfSignPageLocators.
       password().first().debug().clear().type(user.password , { log:false }).should('have.attr', 'required');
       SelfSignPageLocators.
       password().last().debug().clear().type(user.password , { log:false }).should('have.attr', 'required');
       SelfSignPageLocators.
       email().last().debug().clear().type(user.email).should('have.attr', 'required');
       SelfSignPageLocators.
       oraganization().last().debug().clear().type(user.oraganization);
       SelfSignPageLocators.
       telephone().last().debug().clear().type(user.telephone);
       SelfSignPageLocators.
       im().last().debug().clear().type(user.im);
       
        });
     // SelfSignPageLocators.create_user().debug().click();
    }

  });
})

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test

  //   expect(err.message).to.include('Ignoring error for now');
  console.log('Cypress detected uncaught exception', err);
  debugger
  return false;
});