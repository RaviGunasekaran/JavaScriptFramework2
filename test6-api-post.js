#!/usr/bin/env node
var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    api = supertest('https://koala.kabbage.com/overrides');

// Error: getaddrinfo ENOTFOUND koala.kabbage.com koala.kabbage.com:443
    describe('Koala POST - Test', function () {
      console.log("============         THIS IS API TEST - POST : KOALA USER CREATION      =================");
    var koala_partner='kabbage';
    var koala_username='cssuser300';

it('Post and Create Throwaway Account', function (done) {
  this.timeout(15000);  //Increase timeout of response.
  console.log("koala_partner = "+koala_partner);
  console.log("koala_username = "+koala_username);
  let data = {'groups': ['Kore-CSSupervisor']};
  console.log("INPUT BODY DATA = "+JSON.stringify(data));
  api.post('/'+koala_partner+'/'+koala_username+'/account')
.set('Accept', 'application/json')
.send(data)
.expect(201)
.expect('Content-Type', /json/)
// .expect('Created')
.end(function(err, res) {
        if (err) return done(err);
        console.log("STATUS CODE = " + res.statusCode);
        console.log("ERROR = " + err);
        console.log("RESPONSE BODY = " + JSON.stringify(res));
        done();
      });
});
});

afterEach(function(){
   if (this.currentTest.state == 'failed') {
     console.log("Response body: " + util.inspect(response.body,{depth: null, colors: true}) + "\n");
   }
 })
