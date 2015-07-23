'use strict';

module.exports = function (grunt) {
    /**
     * Load all grunt plugins
     */
    require('matchdep')
        .filterDev('grunt-*')
        .forEach(grunt.loadNpmTasks);

    var readJson = function (file, defaults) {
        return grunt.file.exists(file) ? grunt.file.readJSON(file) : defaults || {};
    };

    grunt.initConfig({
        'pkg': readJson('package.json'),

        'config': {
            'paths': {
                'public': 'public',
                'js': '<%= config.paths.public %>/js',
                'css': '<%= config.paths.public %>/css',
                'html': '<%= config.paths.public %>'
            },
            'files': {
                'js': '<%= config.paths.js %>/**/*.js',
                'js_all': '<%= config.paths.js %>/**/*',
                'js_app': '<%= config.paths.js %>/app.js',
                'js_app_min': '<%= config.paths.js %>/app.min.js',
                'css': '<%= config.paths.css %>/**/*.scss',
                'css_all': '<%= config.paths.css %>/**/*',
                'css_app': '<%= config.paths.css %>/app.scss',
                'css_app_min': '<%= config.paths.css %>/app.css',
                'css_dir': '<%= config.paths.css %>'
            }
        },

        'browserify': {
            'dev': {
                'options': {
                    'browserifyOptions': {
                        'debug': true
                    }
                },
                'files': {
                    '<%= config.files.js_app_min %>': ['<%= config.files.js_app %>']
                }
            },
            'prod': {
                'files': {
                    '<%= config.files.js_app_min %>': ['<%= config.files.js_app %>']
                }
            }
        },

        'sass': {
            'dev': {
                'options': {
                    'sourceMap': true
                },
                'files': {
                    '<%= config.files.css_app_min %>': ['<%= config.files.css_app %>']
                }
            },

            'prod': {
                'files': {
                    '<%= config.files.css_app_min %>': ['<%= config.files.css_app %>']
                }
            }
        },

        'dev': {
            'js': ['browserify:dev'],
            'css': ['sass:dev']
        },

        'prod': {
            'js': ['browserify:prod', 'ngAnnotate:prod', 'uglify:prod'],
            'css': ['sass:prod']
        },

        'watch': {
            'options': {
                'debounceDelay': 1
            },
            'dev_js': {
                'files': ['<%= config.files.js_all %>', '!<%= config.files.js_app_min %>'],
                'tasks': 'dev:js'
            },
            'dev_css': {
                'files': '<%= config.files.css %>',
                'tasks': 'dev:css'
            },
            'prod_js': {
                'files': ['<%= config.files.js_all %>', '!<%= config.files.js_app_min %>'],
                'tasks': 'prod:js'
            },
            'prod_css': {
                'files': '<%= config.files.css %>',
                'tasks': 'prod:css'
            }
        },

        'uglify': {
            'prod': {
                'options': {
                    'mangle': true,
                    'compress': true,
                    'preserveComments': false
                },
                'files': {
                    '<%= config.files.js_app_min %>': ['<%= config.files.js_app_min %>']
                }
            }
        },

        'ngAnnotate': {
            'prod': {
                'files': {
                    '<%= config.files.js_app_min %>': ['<%= config.files.js_app_min %>']
                }
            }
        },

        'concurrent': {
            'dev': {
                'options': {
                    'logConcurrentOutput': true
                },
                'tasks': ['watch:dev_js', 'watch:dev_css']
            },
            'prod': {
                'options': {
                    'logConcurrentOutput': true
                },
                'tasks': ['watch:prod_js', 'watch:prod_css']
            }
        },

        'compile': {
            'dev': ['dev', 'concurrent:dev'],
            'prod': ['prod', 'concurrent:prod']
        }
    });

    grunt.task.registerMultiTask('dev', 'Build development files.', function () {
        grunt.task.run(this.data);
    });

    grunt.task.registerMultiTask('prod', 'Build production files.', function () {
        grunt.task.run(this.data);
    });

    grunt.task.registerMultiTask('compile', 'Build and watch files.', function () {
        grunt.task.run(this.data);
    });

    grunt.task.registerTask('help', 'Help', function () {
        grunt.log.subhead('Help');
        grunt.log.writeln('Use "grunt" with no options to build then watch in development mode.');
        grunt.log.writeln('Use "grunt compile:prod" to build then watch in production mode.');
        grunt.log.writeln('Use "grunt dev" to build in production mode.');
        grunt.log.writeln('Use "grunt prod" to build in production mode.');
    });

    grunt.task.registerTask('default', ['compile:dev']);
};
