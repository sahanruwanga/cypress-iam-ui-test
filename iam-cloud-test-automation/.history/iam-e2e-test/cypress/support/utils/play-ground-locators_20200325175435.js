// <reference types="Cypress" />


//LOCATORS
const PAGE_TITLE_LOCATOR = 'h3';
const PAGE_TITLE = 'WSO2 OAuth2 Playground';
const GRANT_TYPE_LABEL = 'Authorization Grant Type';
const GRANT_TYPE_SELECTID = '#grantType';
const IMPLICIT_OPTION ='token';


//METHODS TO GET LOCATORS
const playground_page_title = () => cy.get(PAGE_TITLE_LOCATOR).invoke("text").then((text) => {
    expect(text.trim()).equal(PAGE_TITLE);
  });


  const sr_form_title = () => cy.get(FORM_TITLE_LOCATOR).invoke("text").then((text) => {
    expect(text.trim()).equal(SIGNIN_FORM_TITLE);
  });
const grant_type = () => cy.contains(GRANT_TYPE_LABEL);
const select_implicit = () => cy.get(GRANT_TYPE_SELECTID).then(function($select){
    $select.val(IMPLICIT_OPTION)
})

//EXPORT METHODS 
module.exports = { 
    playground_page_title, grant_type, select_implicit,

      }