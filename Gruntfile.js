'use strict';

module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Configurable paths
    dir: {
      src: 'src',
      jekyll: 'jekyll',
      dist: 'dist'
    },
    watch: {
      compass: {
        files: ['<%= dir.src %>/_scss/**/*.{scss,sass}'],
        tasks: ['compass:server', 'autoprefixer:server']
      },
      autoprefixer: {
        files: ['<%= dir.src %>/css/**/*.css'],
        tasks: ['cop', 'autoprefixer:server']
      },
      jade: {
        files: ['<%= dir.src %>/_jade/**/*.jade'],
        tasks: ['jade:dist']
      },
      coffee: {
        files: ['<%= dir.src %>/_coffee/**/*.coffee'],
        tasks: ['coffee:server', 'concat:server']
      },
      jekyll: {
        files: [
          '<%= dir.jekyll %>/**/*.{html,yml,md,mkd,markdown}',
          '*.{html,yml,md,mkd,markdown}'
        ],
        tasks: ['jekyll:server']
      },
      copy: {
        files: ['<%= dir.src %>/_posts/**/*.md'],
        tasks: ['copy:md', 'jekyll:server']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '.jekyll/**/*.html',
          '.tmp/css/**/*.css',
          '{.tmp,<%= dir.src %>}/<%= js %>/**/*.js',
          '<%= dir.src %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '.jekyll',
            '<%= dir.src %>'
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: ['<%= dir.dist %>']
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= dir.dist %>/*',
            '!<%= dir.dist %>/.git*'
          ]
        }]
      },
      server: [
        '.tmp',
        '.jekyll'
      ]
    },
    jade: {
      options: {
        pretty: true
      },
      dist: {
        expand: true,
        cwd: '<%= dir.src %>/_jade',
        src: '**/!(_)*.jade',
        dest: '<%= dir.jekyll %>',
        ext: '.html'
      },
      server: {
        expand: true,
        cwd: '<%= dir.src %>/_jade',
        src: '**/!(_)*.jade',
        dest: '<%= dir.jekyll %>',
        ext: '.html'
      }
    },
    compass: {
      options: {
        bundleExec: true,
        sassDir: '<%= dir.src %>/_scss',
        imagesDir: '<%= dir.src %>/img',
        relativeAssets: false,
        httpImagesPath: '/img',
        httpGeneratedImagesPath: '/img/generated',
        outputStyle: 'expanded'
      },
      dist: {
        options: {
          cssDir: '<%= dir.dist %>/css',
          generatedImagesDir: '<%= dir.dist %>/img'
        }
      },
      server: {
        options: {
          debugInfo: true,
          cssDir: '.tmp/css',
          generatedImagesDir: '.tmp/img/generated'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= dir.dist %>/css',
          src: '**/*.css',
          dest: '<%= dir.dist %>/css'
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: '.tmp/css',
          src: '**/*.css',
          dest: '.tmp/css'
        }]
      }
    },
    coffee: {
      dist: {
        expand: true,
        cwd: '<%= dir.src %>/_coffee/',
        src: '**/*.coffee',
        dest: '<%= dir.dist %>/js',
        ext: '.js'
      },
      server: {
        expand: true,
        cwd: '<%= dir.src %>/_coffee/',
        src: '**/*.coffee',
        dest: '.tmp/js',
        ext: '.js'
      }
    },
    jekyll: {
      options: {
        bundleExec: true,
        src: '<%= dir.jekyll %>'
      },
      dist: {
        options: {
          config: '_config.yml, _config.build.yml',
          dest: '<%= dir.dist %>'
        }
      },
      server: {
        options: {
          config: '_config.yml',
          dest: '.jekyll'
        }
      },
      check: {
        options: {
          doctor: true
        }
      }
    },
    useminPrepare: {
      options: {
        dest: '<%= dir.dist %>'
      },
      html: '<%= dir.dist %>/index.html'
    },
    usemin: {
      options: {
        assetsDirs: '<%= dir.dist %>',
      },
      html: ['<%= dir.dist %>/**/*.html'],
      css: ['<%= dir.dist %>/css/**/*.css']
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true
        },
        files: [{
          expand: true,
          cwd: '<%= dir.dist %>',
          src: '**/*.html',
          dest: '<%= dir.dist %>'
        }]
      }
    },
    concat: {
      dist: {
        src: [
          '<%= dir.src %>/_components/jquery/jquery-1.9.1.min.js',
          '<%= dir.jekyll %>/js/base.js'
        ],
        dest: '<%= dir.dist %>/js/build_base.js'
      },
      server: {
        src: [
          '<%= dir.src %>/_components/jquery/jquery-1.9.1.min.js',
          '.tmp/js/base.js'
        ],
        dest: '.tmp/js/build_base.js'
      }
    },
    cssmin: {
      dist: {
        options: {
          check: 'gzip'
        }
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= dir.src %>',
          src: [
            'blog/**/*',
            'img/**/*',
            '_posts/**/*',
            'work/**/*'
          ],
          dest: '<%= dir.jekyll %>'
        }]
      },
      img: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= dir.src %>',
          src: [
            'img/**/*',
          ],
          dest: '<%= dir.dist %>'
        }]
      },
      md: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= dir.src %>',
          src: [
            '_posts/**/*',
          ],
          dest: '<%= dir.jekyll %>'
        }]
      }
    },
    filerev: {
      options: {
        length: 4
      },
      dist: {
        files: [{
          src: [
            '<%= dir.dist %>/js/**/*.js',
            '<%= dir.dist %>/css/**/*.css',
            '<%= dir.dist %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}',
            '<%= dir.dist %>/fonts/**/*.{eot*,otf,svg,ttf,woff}'
          ]
        }]
      }
    },
    buildcontrol: {
      dist: {
        options: {
          dir: 'dist',
          remote: '../',
          branch: 'master',
          commit: true,
          push: true
        }
      }
    }
  });

  // Define Tasks
  grunt.registerTask('serve', [
    'clean:server',
    'copy:dist',
    'compass:server',
    'coffee:server',
    'concat:server',
    'jade:server',
    'jekyll:server',
    'autoprefixer:server',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'copy:dist',
    'jade:dist',
    'jekyll:dist',
    'compass:dist',
    'coffee:dist',
    'concat:dist',
    'useminPrepare',
    'autoprefixer:dist',
    'copy:img'
  ]);

  grunt.registerTask('default', [
    'check',
    'test',
    'build'
  ]);
};
