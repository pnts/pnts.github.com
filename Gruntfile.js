module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),

    	concat: {   
    		dist: {
    			src: [
          	'assets/js/libs/*.js', // All JS in the libs folder
          ],
          dest: 'assets/js/build/production.js',
        }
      },

      imagemin: {
    		dynamic: {
        	files: [{
            expand: true,
            cwd: 'assets/img/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'assets/img/build'
        	}]
    		}
			}
		});

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'imagemin']);

  };