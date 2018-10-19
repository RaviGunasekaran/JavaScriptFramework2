// Kore Login Test Cases
//Import Required Pages
var koreLoginPage = require('../../Framework/Pages/KoreLoginPage');

//Required Declarations
var assert = require('assert');

// describe ('Login with Existing User in Kore and Check DashBoard',function(){
//   it('Login to Kore with Existing Username', function(){
//     koreLoginPage.open();
//     koreLoginPage.enterValueInUserNameTextBox();
//     koreLoginPage.enterValueInPasswordTextBox();
//     koreLoginPage.clickSubmitButton();
//     koreLoginPage.validateKoreDashBoard();
//   });
// });

describe ('Get User from DataBase and search in Kore',function(){
  it('Login to Kore with User From DataBase ', function(){
    koreLoginPage.open();
    koreLoginPage.enterValueInUserNameTextBoxFromDB();
    koreLoginPage.enterValueInPasswordTextBox();
    koreLoginPage.clickSubmitButton();
    koreLoginPage.validateKoreDashBoard();
  });
});

// afterEach(function(){
//    if (this.currentTest.state == 'failed') {
//      console.log("Response body: " + util.inspect(response.body,{depth: null, colors: true}) + "\n");
//    }
 // });
