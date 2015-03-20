var
  _         = require('gulp'),
  watch     = require('gulp-watch'),
  connect   = require('gulp-connect'),
  compass   = require('gulp-compass'),
  del       = require('del'),
  deploy    = require('gulp-gh-pages');

  c = {
    source: {
      dir: 'source/',
      sass: 'source/sass/'
    },
    build: {
      dir: 'build/',
      css: 'build/css/'
    }
  };


_.task('html', function () {
  _.src(c.source.dir + '/**/*.html').pipe(_.dest(c.build.dir));
});


_.task('styles', function () {
  _.src(c.source.sass +'*.scss')
    .pipe(compass({
      config_file: './compass.rb',
      css: c.build.css,
      sass: c.source.sass
    }));
});


_.task('watch', function () {
  _.watch(c.source.sass + '/**/*.scss', ['styles']);
  _.watch(c.source.dir + '/**/*.html', ['html']);
});


_.task('server', function () {
  connect.server({root: c.build.dir, port: 3000});
});


_.task('clean', function () {
  return del([
    c.build.dir,
    '.publish',
    '.sass-cache'
  ])
});


_.task('build', ['html', 'styles']);


_.task('deploy', function () {
  return _.src(c.build.dir +'/**/*')
    .pipe(deploy());
});


_.task('default', ['clean'], function () {
  _.start('build');
  _.start('server');
  _.start('watch');
});