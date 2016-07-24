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
        out: 'public/mobile',
        htmlSrc: 'mobile.index.html',
        levels: ['mobile.blocks']
    },
    {
        out: 'public/pad',
        htmlSrc: 'index.html',
        levels: ['mobile.blocks', 'pad.blocks']
    },
    {
        out: 'public/desktop',
        htmlSrc: 'index.html',
        levels: ['mobile.blocks', 'pad.blocks', 'desktop.blocks']
    },
    {
        out: 'shri-tv/www',
        htmlSrc: 'pg.index.html',
        levels: ['mobile.blocks']
    }
];

var getFileNames = [];

gulp.task('default', ['build']);

gulp.task('build', ['pug', 'html', 'css', 'images', 'js']);

gulp.task('pug', function () {
    return gulp.src('phonegap.pug')
        .pipe(pug({
            pretty: true
        }).on('error', gutil.log))
        .pipe(rename('pg.index.html'))
        .pipe(gulp.dest('./'))
});

gulp.task('html', ['pug'], function () {
    params.forEach(function (param) {
        param.fileNames = htmlToBl.getFileNames(param);
    });
    params.forEach(function (param) {
        gulp.src(param.htmlSrc)
            .pipe(htmlmin({collapseWhitespace: true}))
            .pipe(rename('index.html'))
            .pipe(gulp.dest(param.out));
        gulp.src('description.html')
            .pipe(htmlmin({collapseWhitespace: true}))
            .pipe(gulp.dest(param.out));
        gulp.src('description.json')
            .pipe(gulp.dest(param.out));
        gulp.src('favicon.ico')
            .pipe(gulp.dest(param.out));
        gulp.src('tile.png')
            .pipe(gulp.dest(param.out));
        gulp.src('tile-wide.png')
            .pipe(gulp.dest(param.out));
        gulp.src('respond.min.js')
            .pipe(gulp.dest(param.out));
        gulp.src('browserconfig.xml')
            .pipe(gulp.dest(param.out));
        gulp.src('apple-touch-icon.png')
            .pipe(gulp.dest(param.out));
    });
});

gulp.task('css', ['html'],  function () {
    params.forEach(function (param) {
        param.fileNames.then(function (files) {
                return gulp.src(files.css)
                    .pipe(concat('styles.css'))
                    .pipe(url({
                        prepend: 'images/'
                    }))
                    .pipe(postcss([autoprefixer()]))
                    .pipe(cssnano())
                    .pipe(gulp.dest(param.out));
            })
            .done();
    });
});

gulp.task('images', ['html'],  function () {
    params.forEach(function (param) {
        param.fileNames.then(function (src) {
                gulp.src(src.dirs.map(function (dirName) {
                        var imgGlob = path.resolve(dirName) + '/*.{jpeg,png,svg}';
                        console.log(imgGlob);
                        return imgGlob;
                    }))
                    .pipe(gulp.dest(path.join(param.out + '/images/')));
            })
            .done();
    });
});

gulp.task('js', ['html'],  function () {
    params.forEach(function (param) {
        param.fileNames.then(function (src) {
                return src.dirs.map(function (dirName) {
                    var jsGlob = path.resolve(dirName) + '/*.js';
                    console.log(jsGlob);
                    return jsGlob;
                });
            })
            .then(function (jsGlobs) {
                console.log(jsGlobs);
                gulp.src(jsGlobs)
                    .pipe(concat('app.js'))
                    .pipe(uglify())
                    .pipe(gulp.dest(param.out));
            })
            .done();
    });
});
