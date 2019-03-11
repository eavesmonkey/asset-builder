let prompt = require('gulp-prompt');
let config = require('../gulp.config');

module.exports = function(gulp) {
    let cssPreprocessors = ['less', 'sass'];
    let templateLang = ['twig', 'html (static)', 'nunjucks', 'handlebars', 'pug' ];

    return gulp.src('./gulp.config.js')
        .pipe(prompt.prompt([
            {
                type: 'input',
                name: 'srcAssets',
                message: 'Where is your assets folder located?'
            },
            {
                type: 'input',
                name: 'srcTemplates',
                message: 'Where is your templates folder located?'
            },
            {
                type: 'list',
                name: 'cssPreprocessor',
                message: 'Choose a css preprocessor?',
                choices: cssPreprocessors
            },
            {
                type: 'list',
                name: 'templateLang',
                message: 'Choose a template language',
                choices: templateLang
            }
        ], function(res) {
            config.styles.preprocessor = res.cssPreprocessor;
            config.templates.lang = res.templateLang;
            console.log(config);
            return gulp.dest('./', {overwrite: true});
        }))
        .pipe(gulp.dest('./', {overwrite: true}));
};
