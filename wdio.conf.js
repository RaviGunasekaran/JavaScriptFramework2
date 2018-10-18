const path = require('path')

  exports.config = {
    /**
     * server configurations
     */
    hostname: '0.0.0.0',
    port: 4444,
    services: ['selenium-standalone'],
    /**
     * specify test files
     */
     //Run Multiple SPecs
    // specs: [path.resolve(__dirname, 'test/specs/simple.js'),(__dirname, 'test/specs/koalaapitest.js')],
    // specs: [path.resolve(__dirname, 'test/specs/simple.js'),(__dirname,'WebTests/BATS/KoreLoginTest.js')],
    specs: [path.resolve(__dirname,'WebTests/BATS/KoreLoginTest.js')],

    /**
     * capabilities
     */
    capabilities: [{
        browserName: 'chrome'
    }],

    /**
     * test configurations
     */
    logLevel: 'data',
    coloredLogs: true,
    framework: 'mocha',
    logDir: __dirname,

    // reporters: ['spec'],
    reporters: ['allure','spec'],
    // reporters: ['mochawesome'],
  //   mochawesomeOpts : {
  //  includeScreenshots : true,
  //  screenshotUseRelativePath : true
  // },
    reporterOptions: {
      allure: {
            outputDir: 'C:/mochatests/wdio-reports/allure-results'
        }
   // outputDir: 'c:/mochatests/wdio_awasom_reports', //json file will be written to this directory
   // mochawesome_filename: 'wdio_awasom_reportsexecution_report.json', //will default to wdiomochawesome.json if no name is provided
     // generateMochawesome: 'marge c:/mochatests/wdio_awasom_reports/wdio_awasom_reportsexecution_report.html',
     // reportTitle: 'My Project Results'
 },

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },

    /**
     * hooks
     */
    onPrepare: function() {
        // eslint-disable-next-line
        console.log('let\'s go')
    },
    onComplete: function() {
        // eslint-disable-next-line
        console.log('that\'s it')
    }
}
