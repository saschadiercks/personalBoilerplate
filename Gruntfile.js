module.exports = function(grunt) {

	// Dependencies
	require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

	// Initializing configuration objects
	grunt.initConfig({

		// SASS
		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'compressed'
			},
			dist: {
				files: {
					'htdocs/assets/css/site.min.css': 'src/scss/site.scss',
					'htdocs/assets/css/mobile.min.css': 'src/scss/mobile.scss'
				}
			}
		},

		// Watch
		watch: {
			src: {
				files: ['**/*.scss'],
				tasks: ['default'],
				options: {
					event: ['changed', 'added', 'deleted'],
				}
			}
		},
	});

	// Load packages
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Register Tasks
	grunt.registerTask('default', ['sass']);
};
