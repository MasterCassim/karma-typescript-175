module.exports = function() {
	return function(grunt) {

		grunt.initConfig({
			pkg: grunt.file.readJSON('package.json'),

			karma: {
				options: {
					autoWatch: false,
					singleRun: true
				},

				continuous_internal: {
					configFile: './test/unit-continuous.conf.js',
					logLevel: 'INFO'
				}

			}
		});

		grunt.loadNpmTasks("grunt-karma");

		grunt.registerTask('karma:continuous', function() {
			grunt.task.run('karma:continuous_internal');
		});
	};
};
