var sharedConfig = require('./unit.shared.conf');

module.exports = function(config) {
	var configObj = sharedConfig.value(config);

	configObj.junitReporter.outputDir = null;
	configObj.junitReporter.outputFile = sharedConfig.mapper('build/test-results/unit-test-results.xml');

	configObj.browsers = [ 'PhantomJS' ];

	config.set(configObj);
};
