let rootPath = '../';
let srcPath = rootPath + 'src/assets/';
let destPath = rootPath + 'public/assets/';
let templateSrcPath =  rootPath + 'src/';
let templateDestPath = rootPath + 'public/';

module.exports = {
    browserSync: {
        server: {
            baseDir: templateDestPath,
            index: "index.html"
        },
    },
    images: {
        src: srcPath + 'images/**/*.{png,jpg,jpeg,gif,svg}',
        dest: destPath + 'images'
    },
    styles: {
        src: [
            srcPath + 'styles/**/style.{less,sass,scss}',
        ],
        srcWatch: srcPath + 'styles/**/*.{less,sass,scss}',
        dest: destPath + 'styles',
        imagePath: rootPath + 'images',
        minify: true,
        autoprefixer: {
            browsers: ['last 2 versions'],
            cascade: false
        },
        cleanCSS: {
            format: 'beautify' // TODO for dev only
        }
    },
    scripts: {
        src: [
            srcPath + 'scripts/**/*.js'
        ],
        dest: destPath + 'scripts',
        uglify: {
            warnings: true
        },
        babel: {
            presets: ['@babel/env']
        }
    },
    templates: {
        src: [
            templateSrcPath + 'templates/**/*.{html,htm,twig,hbs,nunjucks,pug}'
        ],
        dest: templateDestPath
    }
};
