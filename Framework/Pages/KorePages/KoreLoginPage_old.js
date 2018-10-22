// Kore Login page

//Required Declarations
var assert = require('assert');

//Page Elements
var userNameTextBox = $('#username');
var passwordTextBox = $('#password');
var loginSubmitButton = $('#login-submit');
var searchBoxInDashBoard = $('#user-search-input');


// Page Flows
var koreLoginPage = Object.create({
  getRegressionURL: function(){
    browser.url('https://kore-regression.kabbage.com');
    var title = browser.url('https://kore-regression.kabbage.com').getTitle();
    console.log("Got KoreLoginPage Title.. : ", title);
    assert.equal(title,"Log In");
    console.log("Validation Success..");
  },

  // Enter username Value
enterValueInUserNameTextBox: function(){
  console.log("Clearing username TextBox...");
  // userNameTextBox.clearElement();
  // userNameTextBox.click();
  browser.click('#username');
  console.log("Clicked username TextBox...");
  // userNameTextBox.setValue("kabbageemail1")
   browser.setValue('#username', 'kabbageemail1');
  console.log("Username Entered...");
  browser.pause(5000);
},

// Enter Password Value
enterValueInPasswordTextBox: function(){
console.log("Clearing Password TextBox...");
passwordTextBox.clearElement();
passwordTextBox.click();
console.log("Clicked Password TextBox...");
passwordTextBox.setValue("somepassword")
console.log("Password Entered...");
},

// Click Submit Button
clickSubmitButton: function(){
  loginSubmitButton.click();
  console.log("Clicked loginSubmitButton...");
},

// Validate "Search" textbox present
validateKoreDashBoard: function(){
  var searchBoxElementIsVisible = browser.isVisible('#user-search-input');
  if(searchBoxElementIsVisible){
    console.log("Yes!. Search Box is Displayed After Login!.. Login Success!!!");
  }
}
});
module.exports = koreLoginPage;
