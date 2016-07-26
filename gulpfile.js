var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    path = require('path'),
    url = require('gulp-css-url-adjuster'),
    autoprefixer = require('autoprefixer-core'),
    postcss = require('gulp-postcss'),
    htmlToBl = require('html2bl'),
    htmlmin = require('gulp-htmlmin'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util'),
    pug = require('gulp-pug');

var params = [
    {
        out: 'public/mobile/',
        htmlSrc: 'pages/mobile.index.html',
        levels: ['mobile.blocks']
    },
    {
        out: 'public/pad/',
        htmlSrc: 'pages/index.html',
        levels: ['mobile.blocks', 'pad.blocks']
    },
    {
        out: 'public/desktop/',
        htmlSrc: 'pages/index.html',
        levels: ['mobile.blocks', 'pad.blocks', 'desktop.blocks']
    },
    {
        out: 'shri-tv.app/www/',
        htmlSrc: 'shri-tv.app/www/template/phonegap.index.html',
        levels: ['mobile.blocks']
    }
];

var getFileNames = [];

gulp.task('default', ['build']);

gulp.task('build', ['pug', 'html', 'css', 'images', 'js']);

gulp.task('pug', function () {
    return gulp.src('shri-tv.app/www/template/phonegap.pug')
        .pipe(pug({
            pretty: true
        }).on('error', gutil.log))
        .pipe(rename('phonegap.index.html'))
        .pipe(gulp.dest('shri-tv.app/www/template/'))
});

gulp.task('html', ['pug'], function () {
    var basePagePath = 'mobile.blocks/page/';
    var pagesPath = 'pages/';
    params.forEach(function (param) {
        param.fileNames = htmlToBl.getFileNames(param);
    });
    params.forEach(function (param) {
        gulp.src(param.htmlSrc)
            .pipe(htmlmin({collapseWhitespace: true}))
            .pipe(rename('index.html'))
            .pipe(gulp.dest(param.out));
        gulp.src(pagesPath + 'description.html')
            .pipe(htmlmin({collapseWhitespace: true}))
            .pipe(gulp.dest(param.out));
        gulp.src(pagesPath + 'description.json')
            .pipe(gulp.dest(param.out));
        gulp.src(pagesPath + 'channels.json')
            .pipe(gulp.dest(param.out));
        gulp.src(basePagePath + 'favicon.ico')
            .pipe(gulp.dest(param.out));
        gulp.src(basePagePath + 'tile.png')
            .pipe(gulp.dest(param.out));
        gulp.src(basePagePath + 'tile-wide.png')
            .pipe(gulp.dest(param.out));
        gulp.src(basePagePath + 'respond.min.js')
            .pipe(gulp.dest(param.out));
        gulp.src(basePagePath + 'browserconfig.xml')
            .pipe(gulp.dest(param.out));
        gulp.src(basePagePath + 'apple-touch-icon.png')
            .pipe(gulp.dest(param.out));
    });
});

gulp.task('css', ['html'], function () {
    params.forEach(function (param) {
        param.fileNames.then(function (files) {
            files.css.push('mobile.blocks/page/bem-components.2.4.0.css');
            return gulp.src(files.css)
                .pipe(concat('styles.css'))
                .pipe(url({
                    prepend: 'images/'
                }))
                .pipe(postcss([autoprefixer()]))
                .pipe(cssnano())
                .pipe(gulp.dest(param.out + 'css'));
        })
            .done();
    });
});

gulp.task('images', ['html'], function () {
    params.forEach(function (param) {
        param.fileNames.then(function (src) {
            gulp.src(src.dirs.map(function (dirName) {
                var imgGlob = path.resolve(dirName) + '/*.{jpeg,png,svg}';
                return imgGlob;
            }))
                .pipe(gulp.dest(path.join(param.out + '/images/')));
        })
            .done();
    });
});

gulp.task('js', ['html'], function () {
    params.forEach(function (param) {
        param.fileNames.then(function (src) {
            return src.dirs.map(function (dirName) {
                var jsGlob = path.resolve(dirName) + '/*.js';
                return jsGlob;
            });
        })
            .then(function (jsGlobs) {
                gulp.src(jsGlobs)
                    .pipe(concat('app.js'))
                    .pipe(uglify())
                    .pipe(gulp.dest(param.out + 'js'));
            })
            .done();
    });
});
