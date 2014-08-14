module.exports = {
    options: {
        livereload: true
    },
    less: {
        files: 'less/*.less',
        tasks: ['less'],
        options: {
            interrupt: true,
            livereload: false
        }
    },
    css: {
        files: 'css/*.css'
    },
    html: {
        files: '*.html'
    },
    js: {
        files: ['js/*.js']
    },
    webfont: {
        files: 'svg/*.svg',
        tasks: ['webfont']
    },
    plugins: {
        files: 'bower_components/**',
        tasks: ['uglify']
    },
    bower: {
        files: 'bower.json',
        tasks: ['shell:bower_update'],
        options: {
            livereload: false
        }
    }
};