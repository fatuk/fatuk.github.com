module.exports = function (grunt) {
    // Конфигурация проекта
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //------------------------------------------------------------
        less: { // Task less
            options: {
                expand: true
            },
            dev: { // Target
                options: {
                    strictMath: true
                },
                files: {
                    'css/all.css': ['less/all.less']
                }
            },
            release: { // Target
                options: {
                    strictMath: true,
                    yuicompress: true
                },
                files: {
                    'css/all.css': ['less/all.less']
                }
            }
        },
        
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: '',
                    keepalive: false,
                    hostname: null
                }
            }
        },
        //------------------------------------------------------------
        watch: {
            less: {
                files: 'less/**',
                tasks: ['less:dev'],
                options: {
                    interrupt: true
                }
            },
           
            livereload: {
                options: {
                    livereload: true
                },
                files: ['css/**', 'js/**', '*.html']
            }
        }
        //------------------------------------------------------------
    });
    
    // Инициализация плагинов, таски которых мы вызываем
    grunt.registerTask('run', ['connect', 'watch']);
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
};