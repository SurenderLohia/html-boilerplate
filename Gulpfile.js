var gulp = require('gulp');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');

var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

var insert = require('gulp-insert');
var gulpSequence = require('gulp-sequence');

var APP_LICENSE = "/* Html Boilerplate \n   License: MIT \n   Author: Surender Lohia */\n\n";
var PRISM_LICENSE = "/* http://prismjs.com/download.html?themes=prism&languages=markup+css+clike+javascript */\n/**\n* prism.js default theme for JavaScript, CSS and HTML\n* Based on dabblet (http://dabblet.com)\n* @author Lea Verou*/\n\n";
var OUTDATED_BROWSER = "/*!--------------------------------------------------------------------\nSTYLES 'Outdated Browser'\nVersion:    1.1.2 - 2015\nauthor:     Burocratik\nwebsite:    http://www.burocratik.com\n* @preserve\n-----------------------------------------------------------------------*/\n\n"
var JS_LICENSE_PATH = '/* 3rd party licenses here: ' + ('https://raw.githubusercontent.com/SurenderLohia/html-boilerplate/master' + '/js/3rdpartylicenses.txt */\n\n');

gulp.task('useref', function () {
  var preprocessors = [
    autoprefixer({browsers: ['last 2 version', 'safari 5', 'ie 9']}),
    cssnano(),
  ]
  return gulp.src('index.html')
    .pipe(useref())
    .pipe(gulpif('*.css', postcss(preprocessors)))
    .pipe(gulp.dest('dist'));
});

gulp.task('js-license', function() {
  return gulp.src('dist/js/bundle.js')
    .pipe(insert.prepend(JS_LICENSE_PATH))
    .pipe(insert.prepend(APP_LICENSE))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('css-license', function() {
  return gulp.src('dist/css/main.css')
    .pipe(insert.prepend(OUTDATED_BROWSER))
    .pipe(insert.prepend(PRISM_LICENSE))
    .pipe(insert.prepend(APP_LICENSE))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('copy-images', function() {
  return gulp.src('images/**/*')
    .pipe(gulp.dest('dist/images'));
});

gulp.task('build', gulpSequence(['useref','js-license', 'copy-images'], 'css-license'));