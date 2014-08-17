module.exports = {
    dist: {
        options: {
            sourceMap: true
        },
        files: {
            'vendors/plugins.min.js': [
                'bower_components/jquery/dist/jquery.js',
                'bower_components/jquery-touchswipe/jquery.touchSwipe.js'
            ]
        }
    }
};