// Kore Login Test Cases
//Import Required Pages
var koreLoginPage = require('../../Framework/Pages/KoreLoginPage')

//Required Declarations
var assert = require('assert');

describe ('Login with Existing User in Kore and Check DashBoard',function(){
  it('Login to Kore with Existing Username', function(){
    koreLoginPage.open();
    koreLoginPage.getRegressionURL();
    // browser.pause(5000);
    koreLoginPage.enterValueInUserNameTextBox();
    // browser.pause(5000);
    koreLoginPage.enterValueInPasswordTextBox();
    koreLoginPage.clickSubmitButton();
    browser.pause(5000);
    koreLoginPage.validateKoreDashBoard();
  });
});
