var gulp = require('gulp');
var watch = require('gulp-watch');
var connect = require('gulp-connect');
var compass = require('gulp-compass');
var del = require('del');
var deploy = require('gulp-gh-pages');
var sassdoc = require('sassdoc');


c = {
  source: {
    dir: 'source',
    sass: 'source/sass'
  },
  build: {
    dir: 'build',
    css: 'build/css'
  }
};


gulp.task('docs', function () {
  var options = {
    dest: c.build.dir +'/docs',
    verbose: true
  };

  return gulp.src(c.source.sass +'/**/*.scss')
    .pipe(sassdoc(options));
});


gulp.task('html', function () {
  gulp.src(c.source.dir + '/**/*.html').pipe(gulp.dest(c.build.dir));
});


gulp.task('styles', function () {
  gulp.src(c.source.sass + '/*.scss')
    .pipe(compass({
      config_file: './compass.rb',
      css: c.build.css,
      sass: c.source.sass
    }));
});


gulp.task('watch', function () {
  gulp.watch(c.source.sass + '/**/*.scss', ['styles']);
  gulp.watch(c.source.dir + '/**/*.html', ['html']);
});


gulp.task('server', function () {
  connect.server({root: c.build.dir, port: 3000});
});


gulp.task('clean', function () {
  return del([
    c.build.dir,
    '.publish',
    '.sass-cache'
  ])
});


gulp.task('build', ['html', 'styles']);


gulp.task('deploy', function () {
  return gulp.src(c.build.dir + '/**/*')
    .pipe(deploy());
});


gulp.task('default', ['clean'], function () {
  gulp.start('build');
  gulp.start('server');
  gulp.start('watch');
});
