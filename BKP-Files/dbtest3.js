var sql = require("mssql/msnodesqlv8");
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
const query = 'SELECT top 10 * from customer.kuser';

describe('DB Connection Test', function () {
  it('Connect to DB and Get Data', function (done) {
    this.timeout(15000);  //Increase timeout of response.
      sql.connect(config, function(err){
        if(err){
            console.log("Error while connecting database :- " + err);
            sql.close();
        }
        else {
          console.log("Looks like connected.... " );
          sql.query(query,(err, data)) => {
            console.log("Your Date : "+rows);
          }
            // var request = new sql.Request();
            // request.query(query,function(err, data){
            //     if(err){
            //         console.log("Error while Executing Query :- " + err);
            //         res.send(err);
            //     }
            //     else{
            //         res.send(data.recordset);
            //     }
                sql.close();
                done();
            });
        }
    });
});
// });
