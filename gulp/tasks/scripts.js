module.exports = function(gulp, options) {
    const babel = require('gulp-babel');

    let uglify = require('gulp-uglify');
    let concat = require('gulp-concat');

    return gulp.src(options.src)
        .pipe(babel(options.babel))
        .pipe(concat('script.js'))
        .pipe(uglify(options.uglify))
        .pipe(gulp.dest(options.dest));
};
