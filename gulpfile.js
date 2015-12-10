var gulp = require('gulp');
var gutil = require('gulp-util');
var bowerMain = require('bower-main');
var path = require('path');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var shared = './core/client/shared/';
var print = require('gulp-print');

gulp.task('lib-scripts',function () {
  return gulp.src(bowerMain('js','min.js').normal)
    .pipe(gulp.dest(shared + 'scripts'));
});

gulp.task('build-css', function() {
  return gulp.src(shared + 'style/less/styles.less')
    .pipe(plumber())
    .pipe(less({
      // relativeUrls: true,
      //../../../../../bower_components/bootstrap/less
      paths: [ "bower_components/bootstrap/less" ]
    }))
    .on('error', function(err) {
      gutil.log(err);
      this.emit('end');
    })
    .pipe(autoprefixer({
      browsers: [
        '> 1%',
        'last 2 versions',
        'firefox >= 4',
        'safari 7',
        'safari 8',
        'IE 8',
        'IE 9',
        'IE 10',
        'IE 11'
      ],
      cascade: false
    }))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(shared + 'style/css')).on('error', gutil.log)
});

gulp.task('watch', function() {
  gulp.watch(shared + 'style/less/*.less', ['build-css'])
});

gulp.task('default', ['watch']);
