#!/usr/bin/env node
var yourPltfrm="atl-pltfrm05-qa.services.kabbage.io";
var platform_client_id='738944E3FDAE44439A539F1D11C15C12';
var platform_client_secret='63277A7B8467416E924DF612DA8C3831';
var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    api = supertest('https://'+yourPltfrm);

    describe('Generate Token Test', function () {
      console.log("============         THIS IS API TEST - POST : Generate Token Test      =================");
it('Post and Generate Pltform Token', function (done) {
  this.timeout(15000);  //Increase timeout of response.
  console.log("platform_client_id = "+platform_client_id);
  console.log("platform_client_secret = "+platform_client_secret);
  console.log("API = "+JSON.stringify(api));
  var storeToken;
  var body = {
    "grant_type": "client_credentials",
    "client_id": platform_client_id,
    "client_secret":platform_client_secret
  };
  console.log("Request Body = "+JSON.stringify(body));
  api.post('/auth/token')
.set('Content-Type', 'application/x-www-form-urlencoded')
.send(body)
.expect(200)
.end(function(err, res) {
        if (err) return done(err);
        console.log("STATUS CODE = " + res.statusCode);
        console.log("ERROR = " + err);
        expect(res.body).to.have.property("access_token");
        console.log("RESPONSE Body = "+JSON.stringify(res));
        console.log("========================================");
        console.log("Token Only = "+JSON.stringify(res.body.access_token));
        console.log("========================================");
        done();
      });
});
});

afterEach(function(){
   if (this.currentTest.state == 'failed') {
     console.log("Response body: " + util.inspect(response.body,{depth: null, colors: true}) + "\n");
   }
 })
