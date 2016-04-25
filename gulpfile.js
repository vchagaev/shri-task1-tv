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
    uglify = require('gulp-uglify');

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
    }
];

var getFileNames = [];
params.forEach(function (param) {
    param.fileNames = htmlToBl.getFileNames(param);
});

gulp.task('default', ['build']);

gulp.task('build', ['html', 'css', 'images', 'js']);

gulp.task('html', function () {
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

gulp.task('css', function () {
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

gulp.task('images', function () {
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

gulp.task('js', function () {
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
