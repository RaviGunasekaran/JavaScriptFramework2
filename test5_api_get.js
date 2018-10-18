var should = require('chai').should(),
	expect = require('chai').expect,
	supertest = require('supertest'),
	api = supertest('https://koala.kabbage.com/api/token');

// Error: getaddrinfo ENOTFOUND koala.kabbage.com koala.kabbage.com:443
describe('User Test', function () {
	console.log("============         THIS IS TEST4 : API TEST       =================");
	var location1;
	var location2;
	var location3;
	var locations = [location1, location2, location3];

	it('should return a 200 response', function (done) {
		this.timeout(15000); //Increase timeout of response.
		api.get('/vgupta:Kabbage')
			.set('Accept', 'application/json')
			.expect(200, done);
	});
});

it('should be an object with keys and values', function (done) {
	this.timeout(15000); //Increase timeout of response.
	api.get('/vgupta:Kabbage')
		.set('Accept', 'application/json')
		.expect(200)
		.expect('Content-Type', 'application/json')
		.end(function (err, res) {
			console.log("STATUS CODE = " + res.statusCode);
			location1 = JSON.stringify(res);
			console.log("Final Response =" + location1);
			expect(res.body).to.have.property("username");
			expect(res.body).to.have.property("password_expiry_warning");
			done();
		});
});

afterEach(function () {
	if (this.currentTest.state == 'failed') {
		console.log("Response body: " + util.inspect(response.body, {
			depth: null,
			colors: true
		}) + "\n");
	}
});
