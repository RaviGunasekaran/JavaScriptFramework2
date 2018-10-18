// Kore Login page

//Required Declarations
var assert = require('assert');
var page = require('./page');

//Page Elements
// var userNameTextBoxElement = browser.element('#username');
// var passwordTextBox = $('#password');
// var loginSubmitButton = $('#login-submit');
// var searchBoxInDashBoard = $('#user-search-input');

var selectors = {
    userNameTextBoxElement: '#username',
    passwordTextBox: '#password',
    loginSubmitButton: '#login-submit',
    searchBoxInDashBoard: '#user-search-input'
};



// Page Flows
var koreLoginPage = Object.create(page,{

  // /**
  //     * define elements
  //     */

  // userNameTextBox : { get: function () { return browser.element(selectors.userNameTextBoxElement); } },
  userNameTextBox: { get: function () { return $('#username'); } },
     passwordTextBox: { get: function () { return $('#password'); } },
     loginSubmitButton: { get: function () { return $('#login-submit'); } },
     searchBoxInDashBoard: { get: function () { return $('#user-search-input'); } },

     /**
          * define or overwrite page methods
          */
         open: { value: function() {
             page.open.call(this, 'https://kore-regression.kabbage.com');
         } },


  getRegressionURL: { value: function(){
    browser.url('https://kore-regression.kabbage.com');
    var title = browser.url('https://kore-regression.kabbage.com').getTitle();
    console.log("Got KoreLoginPage Title.. : ", title);
    assert.equal(title,"Log In");
    console.log("Validation Success..");
    browser.setValue('#username','welcome123');
    // browser.pause(5000);
    // return;
  }
},

  // Enter username Value
enterValueInUserNameTextBox: { value: function(){
  console.log("Clearing username TextBox...");
  this.userNameTextBox.clearElement();
  this.userNameTextBox.click();
  console.log("Clicked username TextBox...");
  this.userNameTextBox.setValue('kabbageemail1');
  console.log("New Username Entered...");
  // browser.pause(5000);
  console.log("Your User Name is : "+JSON.stringify(this.userNameTextBox.getValue()));
  // browser.pause(5000);
}
},
//
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
//
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
