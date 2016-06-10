module.exports = function(grunt) {


	// SASS
	require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks
	grunt.initConfig({
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
		}
	});
	grunt.registerTask('default', ['sass']);


	// Watch
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.initConfig({
		watch: {
		  src: {
		    files: ['**/*.scss'],
		    tasks: ['default'],
		    options: {
		      event: ['changed', 'added', 'deleted'],
		    },
		  },
		},
	});
};
