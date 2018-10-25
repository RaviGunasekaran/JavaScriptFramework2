// Create Data from DB Using Given Query

//Required Declarations
var assert = require('assert');
var sql = require("mssql/msnodesqlv8");
var connection,request,requiredUsername,result1,dbStatus;

// Flows
var getDataFromDB = Object.create({

connectToDB: function() {
  console.log("Inside connectToDB...");
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
 sql.connect(config, function(err){
   connection = new connection() ;
   sql.close();
   this.timeout = 5000;
   console.log("DB - Config Set...");
 if(err){
     console.log("Error while connecting database :- " + err);
     dbStatus = "Error while connecting database :- "+err;
     sql.close();
 }
 else {
   console.log("Looks like connected.... " );
}
dbStatus = "Yes!!! Connected to Database!!!!.... ";
})
return dbStatus;
},

executeQuery: function(userQuery) {
  console.log("Inside executeQuery...");
  var request = new sql.Request();
  request.query(userQuery,function(err, result){
    if(err){
        console.log("Error while Executing Query :- " + err);
        res.send(err);
    }
    else{
        console.log("Query Result = "+JSON.stringify(result));
        requiredUsername = result.recordset[0].UserName;
        console.log("Your User Name = "+requiredUsername);
    }
    sql.close();
    console.log("=== DB Connection Closed ===");
})
return requiredUsername;
},

getOneUserfromKUser: function() {
console.log("Inside getOneUserfromKUser Function...");
return "APPLE";
},
});
module.exports = getDataFromDB;
