const fs = require('fs');

const xml2js = require('xml2js');
const util = require('util');
//const parser = new xml2js.Parser();
const parser = require('xml2json');

fs.readFile('../../fixtures/saml_sso.txt', 'utf8', (err, data) => {
    // parser.parseString(data, (err, result) => {
    var jsonResponse = parser.toJson(data);

    fs.writeFile('../../fixtures/saml_response.json', jsonResponse, function (err, data) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
    });

})