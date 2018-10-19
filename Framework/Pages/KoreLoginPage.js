// Kore Login page

//Required Declarations
var assert = require('assert');
var page = require('./page');
var throwawayUserCreation = require('../UserGenerators/ThrowawayUserCreation');
var getDataFromDB = require('../../Framework/UserGenerators/GetDataFromDB');

// Page Flows
var koreLoginPage = Object.create(page,{

  /**
  * define or overwrite page methods
  */
 open: { value: function() {
     page.open.call(this, 'https://kore-regression.kabbage.com');
 } },

    /**
      * define elements
      */
     userNameTextBox: { get: function () { return $('#username'); } },
     passwordTextBox: { get: function () { return $('#password'); } },
     loginSubmitButton: { get: function () { return $('#login-submit'); } },
     searchBoxInDashBoard: { get: function () { return $('#user-search-input'); } },

  // Enter username Value
enterValueInUserNameTextBox: { value: function(){
  console.log("Clearing username TextBox...");
  this.userNameTextBox.clearElement();
  this.userNameTextBox.click();
  console.log("Clicked username TextBox...");
  var newuser = throwawayUserCreation.createNewTAUser();
  console.log("New Throwaway User : "+newuser);
  this.userNameTextBox.setValue(newuser);
  console.log("New Username Entered...");
  console.log("Your User Name is : "+JSON.stringify(this.userNameTextBox.getValue()));
}
},

// Enter username Value from Data base
enterValueInUserNameTextBoxFromDB: { value: function(){
console.log("Clearing username TextBox...");
this.userNameTextBox.clearElement();
this.userNameTextBox.click();
console.log("Clicked username TextBox...");
var newDBuser = getDataFromDB.getOneUserfromKUser();
console.log("New DB User : "+newDBuser);
this.userNameTextBox.setValue(newDBuser);
console.log("New DB Username Entered...");
console.log("Your DB User Name is : "+JSON.stringify(this.userNameTextBox.getValue()));
}
},

// Enter Password Value
enterValueInPasswordTextBox: { value: function(){
console.log("Clearing Password TextBox...");
this.passwordTextBox.clearElement();
this.passwordTextBox.click();
console.log("Clicked Password TextBox...");
this.passwordTextBox.setValue("somepassword")
console.log("Password Entered...");
}
},

// Click Submit Button
clickSubmitButton: { value: function(){
  this.loginSubmitButton.click();
  console.log("Clicked loginSubmitButton...");
}
},

// Validate "Search" textbox present
validateKoreDashBoard: { value: function(){
  var searchBoxElementIsVisible = browser.isVisible('#user-search-input');
  if(searchBoxElementIsVisible){
    console.log("Yes!. Search Box is Displayed After Login!.. Login Success!!!");
  }
}
}
});
module.exports = koreLoginPage;
