const fs = require('fs');

const xml2js = require('xml2js');
const util = require('util');
//const parser = new xml2js.Parser();
const parser = require('xml2json');

fs.readFile('../../fixtures/saml_sso.txt','utf8', (err,data) => {
    // parser.parseString(data, (err, result) => {

    //     fs.writeFile('../../fixtures/saml_response.json', util.inspect(result,false,null,true), function (err,data) {
    //         if (err) {
    //           return console.log(err);
    //         }
    //         console.log(data);
    //       });
       
    // })

    var json = parser.toJson(data);
    console.log("to json ->", json);
    //console.log(data);
       })