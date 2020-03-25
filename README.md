Iam-cloud-tests

This is the IAM cloud test repository. The repository contains a test suite for continuous tests on IAM cloud. Tests implemented with cypress.io test framework. 


Project setup 
Using npm to install Cypress, support: Node.js 8 and above
Get the sample repo
git clone https://github.com/NilukaSripalim/cypress-iam-ui-test.git
cd /cypress-iam-ui-test/iam-cloud-test-automation/iam-e2e-test

Install Node js

Install npm
            npm install

Install Cypress

         npm install --save-dev cypress

Install Reporting dependencies

          npm install mocha --save-dev
        npm install cypress-multi-reporters --save-dev
        npm install mochawesome --save-dev
        npm install mochawesome-merge --save-dev
        npm install mochawesome-report-generator --save-dev
Install packages. 
Navigate to the root package.json and execute the following.
npm install


Scenarios:
SAML SSO test




Execute tests

Pre request: Run Sample SAML App
Navigate to 
cypress-iam-ui-test/iam-cloud-test-automation/src/sample-saml-sso
Command
npm start

There are two ways to execute the test. 
Run a single Test against Cypress Test Runner without headless mode

Navigate to the package.json location where the test script available ex: (..)
Execute command ‘npx cypress open’ to open the test project
After the test runner launch , select the listed tests (ex:saml-sso.spec.json)  will start to execute the test. 


2. Run Tests in headless mode 
Navigate to the package.json location where the test script available ex: (..)
Execute command ‘npm run test’ to open the test project.


Reporting


Sample App for SAML SSO

This Sample app enable and register a service provider for SAML SSO using WSO2 Identity Server and to develop a simple Express-based web application with Passport-SAML component to support and authenticate the users via SAML SSO.

Configurations
WSO2 Identity Server
Create a new Service Provider in the WSO2 Identity Server to register our express application as one. Follow the given step by step guide to create new Service Provider and to register our express application enabling SAML SSO.
Navigate to Main (Tab) -> Identity (Section) -> Service Providers (Sub-section) and select Add. 
The management console will display you the following screen to add a new service provider.

`Service Provider Name: SampleExpressApp
Description: Any valid description of the service provider`

And click Register to register and create a new service provider.
Expand the Claim Configurations (accordion) to configure wanted claims and subject claim URI. We will be using the Local Claim Dialect as the Claim mapping Dialect.
You can add all your wanted (requested claims) by clicking on the Add Claim URI button and selecting one from the drop-down menu

For the demo, we will be selecting the following claims
`http://wso2.org/claims/emailaddress
http://wso2.org/claims/username
http://wso2.org/claims/role`
 
Configure the SAML SSO as follows …
`Issuer: SampleExpressApp
Assertion Consumer URLs: http://localhost:3000/saml/consume
Enable Response Signing: True
Enable Signature Validation in Authentication Requests and Logout Requests: False
Enable Single Logout: True
SLO Response URL: http://localhost:3000/app/home
SLO Request URL: http://localhost:3000/app/home
Enable Attribute Profile: True
Include Attributes in the Response Always: True`

Express Application
After implementing the express application, create a .env file in the root path and enter the following properties.

`SESSION_SECRET="a well secured secret"
SAML_ENTRYPOINT="https://localhost:9443/samlsso"
SAML_ISSUER="SampleExpressApp"
SAML_PROTOCOL="http://"
SAML_LOGOUTURL="https://localhost:9443/samlsso"
 
WSO2_ROLE_CLAIM="http://wso2.org/claims/role"
WSO2_EMAIL_CLAIM="http://wso2.org/claims/emailaddress"`

Run & Test
Run
Run the express application by executing the given command from the root folder
npm start

Test
Open your favorite browser and navigate to http://localhost:3000/app. The browser will redirect to the WSO2 Identity Server’s sign-in page to enter the login credentials.
