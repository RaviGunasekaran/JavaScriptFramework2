// Kore Login Test Cases

//Required Declarations
var assert = require('assert');

//Import Required Pages
var koreLoginPage = require('../../Framework/Pages/KoreLoginPage');


describe ('Login with Existing User in Kore and Check DashBoard',function(){
  it('Login to Kore with Existing Username', function(){
    console.log("=== TEST1 ===");
    koreLoginPage.open();
    koreLoginPage.enterValueInUserNameTextBox();
    koreLoginPage.enterValueInPasswordTextBox();
    koreLoginPage.clickSubmitButton();
    koreLoginPage.validateKoreDashBoard();
    koreLoginPage.signoutFromKore();
    console.log("=== TEST1 ===");
  });
  });

describe ('Get User from DataBase and search in Kore',function(){
  it('Login to Kore with User From DataBase ', function(){
    console.log("=== TEST2 ===");
    koreLoginPage.open();
    koreLoginPage.enterValueInUserNameTextBoxFromDB();
    koreLoginPage.enterValueInPasswordTextBox();
    koreLoginPage.clickSubmitButton();
    koreLoginPage.validateKoreDashBoard();
    koreLoginPage.signoutFromKore();
    console.log("=== TEST2 ===");
  });
});
