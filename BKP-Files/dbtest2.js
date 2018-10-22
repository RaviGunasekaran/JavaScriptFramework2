// SCRIPT TO CONNECT TO DB USING WINDOWS AUTHENTICATION
var sql = require("mssql/msnodesqlv8");
//Initiallising connection string
var config =
{
        "host": "regdb.prod.kabbage.com",
        "database": "KOLTPWeb",
        "driver": "msnodesqlv8",
        "connectionString": "Driver={SQL Server Native Client 11.0};Server=regdb.prod.kabbage.com;Database=KOLTPWEB;Trusted_Connection=yes;",
        "dialectOptions": {
            "trustedConections": true
        }
}
var query = 'select top 10 * from customer.kuser;';

describe('DB Connection using windows AUTHENTICATION - Test', function () {
  it('Connect to DB and Get Data', function (done) {
    this.timeout(15000);  //Increase timeout of response.
    sql.connect(config, function(err){
        if(err){
            console.log("Error while connecting database :- " + err);
            sql.close();
        }
        else {
          console.log("Yes!!! Connected to My Database!!!!.... " );
            var request = new sql.Request();
            request.query(query,function(err, result){
                if(err){
                    console.log("Error while Executing Query :- " + err);
                    res.send(err);
                }
                else{
                    console.log("Result = "+result.recordset[0].number);
                    console.log("Result = "+JSON.stringify(result));
                }
                sql.close();
                done();
            });
        }
    });
});
});
