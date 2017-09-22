// Karma configuration
// Generated on Wed Mar 29 2017 12:48:18 GMT+0200 (W. Europe Daylight Time)

var path = require('path');

function mapPath(element) {
	return path.normalize(__dirname + "/../" + element);
}

var preProcessors = {};
preProcessors[mapPath('../**/*.ts')] = ["karma-typescript"];

module.exports = {
	mapper: mapPath,
	value: function (config) {
		return {
			// base path that will be used to resolve all patterns (eg. files, exclude)
			basePath: '..',

			// frameworks to use
			// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
			frameworks: ['jasmine', 'karma-typescript', 'phantomjs-shim'],

			// list of files / patterns to load in the browser
			files: [
				'../_shared/**/*.ts',
				'src/**/*.ts',
				'test/**/*.ts'
			].map(mapPath),

			// list of files to exclude
			exclude: [].map(mapPath),

			// preprocess matching files before serving them to the browser
			// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
			preprocessors: preProcessors,

			karmaTypescriptConfig: {
				compilerOptions: {
					"importHelpers": true,
					"downlevelIteration": true,
					"lib": [ "DOM", "ES5" , "ScriptHost", "ES2015.Promise", "ES2015.Generator", "ES2015.Iterable" ],
					"types": [ "jasmine" ],

					"baseUrl": ".",
					"paths": {
						"@shared/*": ["../_shared/*"].map(mapPath),
						"tslib": ["./node_modules/tslib/tslib.d.ts"].map(mapPath)
					}
				},
				include: ["../_shared/**/*.ts", "src/**/*.ts", "test/unit/**/*.ts"].map(mapPath),
				coverageOptions: {
					exclude: /\.(d|spec|test|mock|config)\.ts$/i
				},
				reports: {
					"html": mapPath("build/test-results/coverage/")
				}
			},

			// test results reporter to use
			// possible values: 'dots', 'progress'
			// available reporters: https://npmjs.org/browse/keyword/karma-reporter
			reporters: ['progress', 'junit', 'karma-typescript'],


			// web server port
			port: 9876,

			// enable / disable colors in the output (reporters and logs)
			colors: true,

			// level of logging
			// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
			logLevel: config.LOG_INFO,

			// enable / disable watching file and executing tests whenever any file changes
			autoWatch: true,

			// start these browsers
			// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
			browsers: ['Chrome', 'Firefox', 'IE', 'PhantomJS'],

			// Continuous Integration mode
			// if true, Karma captures browsers, runs the tests and exits
			singleRun: false,

			// Concurrency level
			// how many browser should be started simultaneous
			concurrency: Infinity,

			junitReporter: {
				outputDir: mapPath('build/test-results/junit/'),
				suite: 'Project1'
				//properties: systemProps
			}
		};
	}
};
