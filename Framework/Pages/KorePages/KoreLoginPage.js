// Kore Login page

//Required Declarations
var assert = require('assert');
var page = require('../page');
var throwawayUserCreation = require('../../../Framework/DataGenerators/APIHelpers/ThrowawayUserCreation');
var getDataFromDB = require('../../../Framework/DataGenerators/DataBaseHealpers/GetDataFromDB');
var query = 'select top 1 UserName from customer.kuser order by bornondate;';

// Page Flows
var KoreLoginPage = Object.create(page,{

  /**
  * define or overwrite page methods
  */
 open: { value: function() {
     page.open.call(this,'https://kore-regression.kabbage.com');
 } },
 close: { value: function() {
   page.close.call();
 }
},

    /**
      * define elements
      */
     userNameTextBox: { get: function () { return $('#username'); } },
     passwordTextBox: { get: function () { return $('#password'); } },
     loginSubmitButton: { get: function () { return $('#login-submit'); } },
     searchBoxInDashBoard: { get: function () { return $('#user-search-input'); } },
     defaultAvatar: { get: function () { return $('.fa.fa-user.user-default-avatar'); } },
     logoutLink: { get: function () { return $('a[href="/auth/logout/"]'); } },


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
console.log("DB STATUS = "+getDataFromDB.connectToDB());
console.log("QUARY STATUS = "+getDataFromDB.executeQuery(query));
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
},
// Signout from Kore
signoutFromKore: { value: function(){
  this.defaultAvatar.click();
  console.log("Default Avatar Clicked...");
  this.logoutLink.click();
  console.log("LogoutLink Clicked...");
}
},

});
module.exports = KoreLoginPage;
