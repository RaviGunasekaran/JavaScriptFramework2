// Create Throwaway User using THrowaway - API

//Required Declarations
var assert = require('assert');
var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    api = supertest('https://koala.kabbage.com/overrides');
var koala_partner='kabbage';
var koala_username='cssuser400';

// Flows
var throwawayUserCreation = Object.create({
  createNewTAUser: function() {
    console.log("koala_partner = "+koala_partner);
  console.log("koala_username = "+koala_username);
  let data = {'groups': ['Kore-CSSupervisor']};
  console.log("INPUT BODY DATA = "+JSON.stringify(data));
  api.post('/'+koala_partner+'/'+koala_username+'/account')
.set('Accept', 'application/json')
.send(data)
.expect(201)
.expect('Content-Type', /json/)
.end(function(err, res) {
        if (err) return done(err);
        console.log("STATUS CODE = " + res.statusCode);
        console.log("ERROR = " + err);
        console.log("RESPONSE BODY = " + JSON.stringify(res));
      });
      return koala_username;
},
});
module.exports = throwawayUserCreation;
