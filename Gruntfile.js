module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),

    	concat: {   
    		dist: {
    			src: [
          	'assets/js/lib/*.js', // All JS in the libs folder
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
			},

			watch: {
				options: {
        	livereload: true,
    		},
    		
    		scripts: {
        	files: ['js/*.js'],
        	tasks: ['concat', 'uglify'],
        	options: {
            spawn: false,
        	}
    		},
    		
    		css: {
        	files: ['assets/css/*.scss'],
        	tasks: ['sass'],
        	options: {
          	spawn: false,
        	}
      	}, 
			},
		});

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'imagemin']);

    grunt.registerTask('dev', ['watch']);

  };