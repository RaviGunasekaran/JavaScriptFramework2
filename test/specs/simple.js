var assert = require('assert');

describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://webdriver.io');
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    });
});

describe('First WebdriverIO - Test',function() {
  it('Just Open Kabbage!',function() {
    browser.url('https://www.kabbage.com/');
    var title = browser.url('https://www.kabbage.com/').getTitle();
    console.log("Got the Title.. : ", title);
    assert.equal(title,"Small Business Funding Options Up To $250,000 | Kabbage");
    console.log("Validation Success..");
  });
  });
