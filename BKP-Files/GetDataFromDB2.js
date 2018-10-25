// Create Data from DB Using Given Query

//Required Declarations
var assert = require('assert');
var sql = require("mssql/msnodesqlv8");
var connection,request,requiredUsername,result1,dbStatus;
// var config =
// {
//         "host": "regdb.prod.kabbage.com",
//         "database": "KOLTPWeb",
//         "driver": "msnodesqlv8",
//         "connectionString": "Driver={SQL Server Native Client 11.0};Server=regdb.prod.kabbage.com;Database=KOLTPWEB;Trusted_Connection=yes;",
//         "dialectOptions": {
//             "trustedConections": true
//         }
// };

// Flows

 function connectToDataBase(config,err) {
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
  console.log("Inside  connectToDataBase function...");
  sql.connect(config, function(err){
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
};


var getDataFromDB = Object.create({

connectToDB: function() {
  console.log("Inside connectToDB...");
  console.log("Calling  connectToDataBase function...");
  console.log("Result Of dbStatus = "+connectToDataBase());
  return connectToDataBase();
  // console.log("DB - Config Set...");
  // connection = new sql.connect(config);
  // if(err){
  //     console.log("Error while connecting database :- " + err);
  //     sql.close();
  // }else{
  //   console.log("Successfully Connected to Database...");
  //     sql.close();
  // }
},

  getDatabaseResult: function(query,required,err,result) {
  console.log("Inside getDatabaseResult Function...");
  console.log("query : "+query);
  console.log("required : "+required);
  console.log("err : "+err);
  console.log("result : "+result);
        connection = new sql.connect(config);
        request = new sql.Request(connection);
        console.log("Yes!!! Connected to Database!!!!.... " );
        var request = new sql.Request();
        result1 = request.query(query);
          console.log("First Result = "+JSON.stringify(result));
            if(err){
                console.log("Error while Executing Query :- " + err);
                res.send(err);
            }
            else{
              if (required == 'UserName'){
                console.log("Query Result = "+JSON.stringify(result1));
                requiredUsername = result1.recordset[0].UserName;
                console.log("Your User Name = "+requiredUsername);
              }
            }
            connection.close();
            console.log("=== DB Connection Closed ===");
  console.log("Your User name is : "+requiredUsername);
  return requiredUsername;
},


    getOneUserfromKUser: function() {
    console.log("Inside getOneUserfromKUser Function...");
    console.log("Your User name is : "+dbUsername);
    return dbUsername;
},
    getOneUserFromDBWithGivenQuery: function() {
    console.log("Inside getOneUserFromDBWithGivenQuery Function...");
    console.log("Your Query Result is : "+dbUsername);
    return dbUsername;
},
});
module.exports = getDataFromDB;
