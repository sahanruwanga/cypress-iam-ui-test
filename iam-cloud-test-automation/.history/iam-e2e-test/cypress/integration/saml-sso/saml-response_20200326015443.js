const fs = require('fs');

const xml2js = require('xml2js');
const util = require('util');
const parser = new xml2js.Parser();

fs.readFile('../../fixtures/saml_sso.txt', (err,data) => {
    parser.parseString(data, (err, result) => {
       // fs.writeFile('cypress/fixtures/saml_response.json', util.inspect(result,false,null,true));
        console.log( util.inspect(result,false,null,true));
    })
       })