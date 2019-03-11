let templates = {
    html: function(gulp, options) {
        return gulp.src(options.src)
            .pipe(gulp.dest(options.dest));
    },

    hbs: function(gulp, options) {
        // Insert code for compiling.
    },

    nunjucks: function(gulp, options) {
        // Insert code for compiling.
    },

    pug: function(gulp, options) {
        // Insert code for compiling.
    }
};

module.exports = templates;


