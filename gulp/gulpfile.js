let gulp = require('gulp');
let config = require('./gulp.config.js');
let browserSync = require('browser-sync');

function style() {
    return require('./tasks/styles').sass(gulp, config.styles);
}

function script() {
    return require('./tasks/scripts')(gulp, config.scripts);
}

function templates() {
    return require('./tasks/templates').html(gulp, config.templates);
}

function dev() {
    browserSync.init(config.browserSync);
    watch();
}

function watch() {
    gulp.watch(config.scripts.src, script);
    gulp.watch(config.styles.srcWatch, style).on('change', browserSync.reload);
    gulp.watch(config.templates.src, templates).on('change', browserSync.reload);
}

function install() {
    return require('./tasks/install')(gulp);
}

function download() {
    return require('./tasks/download')(gulp);
}

exports.style = style;
exports.script = script;
exports.templates = templates;
exports.install = install;
exports.download = download;
exports.dev = gulp.series(script, style, templates, dev);
exports.default = gulp.parallel(script, style, templates);
