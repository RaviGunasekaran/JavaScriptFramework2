var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('KoreConfig.properties');


// fully qualified name
var SELENIUM_SAUCELAB_ADDRESS = properties.get('SELENIUM_SAUCELAB_ADDRESS');
// console.log("SELENIUM_SAUCELAB_ADDRESS = "+SELENIUM_SAUCELAB_ADDRESS);

var getSauceAddress = function(){
  console.log("SELENIUM_SAUCELAB_ADDRESS = "+SELENIUM_SAUCELAB_ADDRESS);
  return SELENIUM_SAUCELAB_ADDRESS;
}
