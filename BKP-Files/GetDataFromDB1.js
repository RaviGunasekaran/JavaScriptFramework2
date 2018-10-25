// Create Data from DB Using Given Query

//Required Declarations
var assert = require('assert');
var sql = require("mssql/msnodesqlv8");
var query = 'select top 1 UserName from customer.kuser order by bornondate;';
var dbUsername;
beforeEach(function(){
  console.log("Inside beforeEach Function!!!");

  var config =
  {
          "host": "regdb.prod.kabbage.com",
          "database": "KOLTPWeb",
          "driver": "msnodesqlv8",
          "connectionString": "Driver={SQL Server Native Client 11.0};Server=regdb.prod.kabbage.com;Database=KOLTPWEB;Trusted_Connection=yes;",
          "dialectOptions": {
              "trustedConections": true
          }
  };
  console.log("DB - Config Set...");

  sql.connect(config, function(err){
  if(err){
      console.log("Error while connecting database :- " + err);
      sql.close();
  }
  else {
    console.log("Yes!!! Connected to Database!!!!.... " );
      var request = new sql.Request();
      request.query(query,function(err, result){
          if(err){
              console.log("Error while Executing Query :- " + err);
              res.send(err);
          }
          else{
              console.log("Query Result = "+JSON.stringify(result));
              dbUsername = result.recordset[0].UserName;
              console.log("Your User Name = "+dbUsername);
          }
          sql.close();
          console.log("=== DB Connection Closed ===");
      });
  }
  // return JSON.stringify(result);
});

});

// Flows
var getDataFromDB = Object.create({
    getOneUserfromKUser: function() {
    console.log("Inside getOneUserfromKUser Function...");
    console.log("Your User name is : "+dbUsername);
    return dbUsername;
},
// var getOneUserFromDBWithGivenQuery = Object.create({
    getOneUserFromDBWithGivenQuery: function() {
    console.log("Inside getOneUserFromDBWithGivenQuery Function...");
    console.log("Your Query Result is : "+dbUsername);
    return dbUsername;
},
});
module.exports = getDataFromDB;
