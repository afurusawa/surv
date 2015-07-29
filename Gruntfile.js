/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    config: {
        paths: {
            public: 'public',
            js: '<%= config.paths.public %>/js',
            css: '<%= config.paths.public %>/css',
            jade: '<%= config.paths.public %>/jade',
            html: '<%= config.paths.public %>'
        },
        files: {
            js: '<%= config.paths.js %>/*.js',
            js_all: '<%= config.paths.js %>/**/*',
            js_app: '<%= config.paths.js %>/app.js',
            js_app_min: '<%= config.paths.js %>/app.min.js',
            css: '<%= config.paths.css %>/**/*.scss',
            css_all: '<%= config.paths.css %>/**/*',
            css_app: '<%= config.paths.css %>/scss/app.scss',
            css_app_min: '<%= config.paths.css %>/app.css',
            css_dir: '<%= config.paths.css %>',
            jade: '<%= config.paths.jade %>/*.jade',
            jade_master: '<%= config.paths.jade %>/master.jade'
        }
    },


    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['lib/<%= pkg.name %>.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      dist: {
        src: ['<%= config.paths.js %>/questionnaire.js', '<%= config.paths.js %>/questionServer.js'],
        dest: '<%= config.paths.js %>/app.js'
      }
    },

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },

    // Watch
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'qunit']
      },
      css: {
        files: '<%= config.files.css %>',
        tasks: ['sass']
      },
      jade: {
        files: '<%= config.files.jade %>',
        tasks: ['jade']
      }
    },

    // Jade
    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          '<%= config.paths.html %>/app.html' : ['<%= config.files.jade_master %>']
        }
      }
    },

    // Sass
    sass: {                              // Task
      build: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {
          '<%= config.files.css_app_min %>': ['<%= config.files.css_app %>']
        }
      }
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task.
  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify', 'jade', 'sass']);

};




