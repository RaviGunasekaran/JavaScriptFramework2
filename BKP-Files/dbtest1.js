// More here -> https://www.npmjs.com/package/mssql
var sql = require('mssql/msnodesqlv8');
var connectionString  = {
  // connectionString: 'Driver=SQL Server;Server=regdb.prod.kabbage.com;Database=KOLTPWEB;Trusted_Connection=true;'
    "Data Source" :"regdb.prod.kabbage.com,1433",
    "User Id": 'kabbage\\rgunasekaran',
    "password": 'mydearboywelcome',
    // server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    // database: 'KOLTPWEB'
    "Initial Catalog": "KOLTPWEB",
    "Integrated Security": true
};

var query = 'SELECT top 10* from customer.kuser';
describe('DB Connection Test', function () {
  it('Connect to DB and Get Data', function (done) {

    sql.open(config, function (err, conn) {
            assert.ifError("CONNECTION ERROR :" + err);
            // prepare a statement which can be re-used
            conn.prepare(query, function (e, ps) {
                // called back with a prepared statement
                console.log("prepared query meta data avaialble to view :" +ps.getMeta());
                // prepared query meta data avaialble to view
                assert.ifError(err);
                // execute with expected paramater
                ps.preparedQuery([1], function(err, fetched) {
                    console.log(fetched);
                    // can call again with new parameters.
                    // note - free the statement when no longer used,
                    // else resources will be leaked.
                    ps.free(function() {
                        done();
                    })
                });
            });

    // sql.query(config, query, (err, rows) => {
    // console.log(rows);
});
// var connection = new sql.Connection(config, function(err) {
//   var request = new sql.Request(connection); // or: var request = connection.request();
//         });
  });
  });
// sql.connect("Data Source=172.25.x.x,1433;User Id=CSLx\\Name;Password=xxxxxx1234;Initial Catalog=giveTHedataabseNamel;Integrated Security=True",function(err){ }
// sql.connect(config, err => {
//   new sql.Request().query('SELECT top 10* from customer.kuser', (err, result) => {
//     console.log(".:The Good Place:.");
//     if(err) { // SQL error, but connection OK.
//       console.log("  ERROR : "+ err);
//     } else { // All is rosey in your garden.
//       console.dir(result);
//       console.log("RESULT : "+result);
//     };
//   });
// });
// sql.on('error', err => { // Connection borked.
//   console.log(".:The Bad Place:.");
//   console.log("  Fork: "+ err);
// });
