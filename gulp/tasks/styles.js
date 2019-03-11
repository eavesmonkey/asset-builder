const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

function errorHandler(err) {
    console.log(err.toString());
    // Ends the current pipe, so Gulp watch doesn't break
    this.emit('end');
}

let styles = {
    less: function(gulp, options) {
        var less = require('gulp-less');
        return gulp.src(options.src)
            .pipe(less().on('error', errorHandler))
            .pipe(autoprefixer(options.autoprefixer))
            .pipe(concat('style.css'))
            .pipe(cleanCSS(options.cleanCSS))
            .pipe(gulp.dest(options.dest));
    },

    sass: function(gulp, options) {
        var sass = require('gulp-sass');
        return gulp.src(options.src)
            .pipe(sass().on('error', errorHandler))
            .pipe(autoprefixer(options.autoprefixer))
            .pipe(cleanCSS(options.cleanCSS))
            .pipe(gulp.dest(options.dest));
    }
};

module.exports = styles;


