var gulp = require('gulp');
var watch = require('gulp-watch');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var del = require('del');


gulp.task('scripts', ['clean'], function () {
  return gulp.src('./source/javascripts/**/*.js')
    .pipe(uglify())
    .pipe(concat('application.js'))
    .pipe(gulp.dest('./assets'));
});


gulp.task('sass', function () {
  return gulp.src('./source/stylesheets/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets'))
});


gulp.task('watch', function () {
  gulp.watch('./source/stylesheets/**/*.scss', ['sass']);
  gulp.watch('./source/javascripts/**/*.js', ['scripts']);
});


gulp.task('server', function () {
  connect.server({root: './', port: 3000});
});


gulp.task('clean', function () {
  return del(['assets', '.sass-cache'])
});


gulp.task('default', ['clean'], function () {
  gulp.start('scripts');
  gulp.start('sass');
  gulp.start('server');
  gulp.start('watch');
});
