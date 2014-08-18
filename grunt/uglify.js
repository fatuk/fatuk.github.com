module.exports = {
    dist: {
        options: {
            sourceMap: true
        },
        files: {
            'vendors/plugins.min.js': [
                'bower_components/jquery/dist/jquery.js',
                'bower_components/jquery-mobile-events/jquery-mobile-events.js'
            ]
        }
    }
};