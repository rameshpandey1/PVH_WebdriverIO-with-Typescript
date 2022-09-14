# WebdriverIO-v7 Cucumber BDD and TypeScript for PVH QA Assignment 

This repository shows an example of how to combine WebdriverIO (v4), Cucumber and TypeScript in order to create a robust BDD test cases.

## Fetaures

+ WebdriverIO v7
+ Cucumber v7
+ TypeScript Version 4.8.3
+ Chai v4+
+ Allure v7
+ Spec v7
+ ts-node 10.9.1
+ Visual code studio editor 

## Getting Started

npm init wdio .
To install all packages:
-npm install (package name)
-npm install typescript --save-dev

## How to write a test

You just need to create a *.feature file under (features) folder. The test is written by using [Gherkin Syntax](https://docs.cucumber.io/gherkin/reference/).

*****feature files:

1. login.feature
 Scenario Outline: Validate user login functionality with valid/invalid username/email and invalid password
 Scenario Outline: Validate user can login successfully with existing user credentails

2.addnewaddress.feature
Scenario Outline: Validate user can add address for logged in user

## Run Test from terminal
Go to project "wdio.conf.ts" and modify below files:
1.specs: ["./features/**/*{feature_file}.feature"] --> Here we can define specfic feature filename to execute single test else, Otherswise it will pick all the feature file with .feature extension.
2.require: ["./features/step-definitions/*{stepdefination_file}.ts"]-->Here we can define specific step defination filename to execute single, if not, it will take all the steps defination with .ts extension

## How to run test via terminal using below command:
- npx wdio run test/wdio.conf.ts


## To generate Allure report, Pls use below command on terminal:
- npm run report 
***it will open the allure execution report.html in system's default browser


## Referece:

Refrence taken from (https://webdriver.io/docs/gettingstarted)


************** Limitation /Assumption: **************

- Script development is ready for "Login" validation and "addnewaddress" but I found the application(https://nl.tommy.com/) production web app don't allow to execute automation script(automated crawling) to login with valid credentails 
- due to some security issue. 
- it is giving HTTP 403 Forbidden response via automation script, While same login is working fine manually using same credentails.

Note:
- I Tested the scenario "Validate user login functionality with valid/invalid email and invalid password" but app Login is not happening via automation so not able to validated the below scenarios: 
1.login with valid credentails  
2.Add new address for logged in user 


Below is the Api request and reponse for app login with valid credentails via automation execution : 

**Request URL: https://nl.tommy.com/wcs/resources/store/30019/loginidentity?rememberMe=false&updateCookies=true
Request Method: POST
Status Code: 403 
Remote Address: 23.1.115.78:443
Referrer Policy: strict-origin-when-cross-origin

**Request Payload:
{logonId: "ramesh25790@gmail.com", logonPassword: "Pvh@1234"}
logonId
: 
"ramesh25790@gmail.com"
logonPassword
: 
"Pvh@1234"

***Response:
<HTML><HEAD>
<TITLE>Access Denied</TITLE>
</HEAD><BODY>
<H1>Access Denied</H1>
 
You don't have permission to access "http&#58;&#47;&#47;nl&#46;tommy&#46;com&#47;wcs&#47;resources&#47;store&#47;30019&#47;loginidentity&#63;" on this server.<P>
Reference&#32;&#35;18&#46;9c5a33b8&#46;1663170748&#46;1b8c4f49
</BODY>
</HTML>

**
Note:
I have attached the screen shot for refrence of HTTP 403 reponse for valid login response.