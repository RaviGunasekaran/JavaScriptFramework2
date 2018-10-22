const wdio = require('wdio');
var assert = require ("assert");
var webdriverio = require ("webdriverio");
var browserOptions = {
  desiredCapabilities:{
    browserName: 'chrome'
  }
};

beforeEach(function(){
  console.log("Inside beforeEach Function!!!");
});

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
    it('This is second test',function() {
      console.log("2nd test!!!");
    });
  });
});

describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        wdio.browser.url('http://webdriver.io');
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    });
});

// describe('First WebdriverIO - Test',function() {
//   it('Just Open Kabbage!',function() {
//     //var title = wdio.remote(browserOptions).init().url('https://www.kabbage.com/').getTitle();
//     //var title = browser.url('https://www.kabbage.com/').getTitle();
//     browser.url('https://www.kabbage.com/');
//     console.log("Got the Title.. : ", title);
//     assert.equal(title,"www.kabbage.com");
//     console.log("Validation Success..");
//   });
//
//   describe('NEW - First WebdriverIO - Test', () => {
//     it('Just Open Kabbage!', () => {
//       //var title = wdio.remote(browserOptions).init().url('https://www.kabbage.com/').getTitle();
//       //var title = browser.url('https://www.kabbage.com/').getTitle();
//       browser.url('https://www.kabbage.com/');
//       console.log("Got the Title.. : ", title);
//       assert.equal(title,"www.kabbage.com");
//       console.log("Validation Success..");
//     });
// });
// });
