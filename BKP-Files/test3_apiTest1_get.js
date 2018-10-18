var assert = require('assert');
let express = require('express');
let app = express();
// var api = require('../apiHelpers/apihelper');
var supertest = require('supertest');
var uuid = require('uuid');
var chai = require('chai');
var expect = require('expect');

global.app = app;
global.request = supertest(app);
api = supertest('https://koala.kabbage.com/overrides');

console.log("============         THIS IS TEST3 : API TEST       =================");

describe('Koala API test', function() {
  it('Create Koala User', function() {
    console.log("Trying to create Koala User....");
    let req = {
              // "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtleWlkIjoiMSJ9.eyJuYW1laWQiOiJmNWFhMDY0YmE1OTA0YjZhYmU5OTQ5NzAzMDc5NmM2MiIsInVuaXF1ZV9uYW1lIjoiLyIsInJvbGUiOlsiQ2xpZW50IiwiQWRtaW5pc3RyYXRvciJdLCJjbGllbnRhcHBsaWNhdGlvbiI6IkthYmJhZ2UgU2FsZXNmb3JjZSIsInNjb3BlcyI6IkJ3QUFBQUVBQUFCQyIsImh0dHA6Ly9zY2hlbWFzLmthYmJhZ2UuY29tL3dzLzIwMTUvMTAvaWRlbnRpdHkvY2xhaW1zL3BhcnRuZXJpZCI6IjEiLCJpc3MiOiJhdXRoLmthYmJhZ2UuaW8iLCJhdWQiOiJrYWJiYWdlLmlvIiwiZXhwIjoxNTMzNzE0MzU0LCJuYmYiOjE1MzM3MTI1NTR9.hd97HA7tVLx8ePrErLpg0VxOHK7d4Ho2UlqIJZesBYkgXTiuHl9IzrIHXsk6JmlG4Jyq4mLzWp_U30vV0kf2ZEN6nTsYXdYw9MxTvON6tTP7YS6ujcKrI6-yUWbaKryBDc6OP_hrwbs8Mu02a3O8pc_3Kr5mB1A-xhMiEK40uo1YxOFiAnc-g3OBSg3Vrf3hDO27roIdkmYwemG3IeYMfEGaOmWKVbHSJoZ5hxadKfPeGOOKKYsSAyN2-ATxgujoFQp4aGgiRrAJqlgY-dzDYiogjh9a9lP1j7kuboofI_f9xHWRlfAs3XhkqjBJUymFJM_L-Q6t9DkFsaLMf_x7Zg",
              "Content-Type": "application/json",
              // "groups": "Kore-CSSupervisor"
          }
    // request.post('https://koala.kabbage.com/overrides/kabbage/cssuser101/account')
    api.get('/kabbage/rgunasekaran/groups/')
     .set('Accept', 'application/json')
    // .send(req)
    .expect(200)
    .end(function(err, res) {
                    // res.should.have.status(200);
                    console.log("Success!!!!");
                    console.log("Response :" + res.body);
                    done(err);
                });
  });
});
