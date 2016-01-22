var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    del = require('del');


gulp.task('styles', function() {
  return sass('assets/scss/*.scss')
  .pipe(autoprefixer('last 2 version'))
  .pipe(gulp.dest('assets/css'))
  .pipe(notify({ message: 'styles are done baking'}));
});

gulp.task('clean', function() {
  return del(['assets/css']);
});

gulp.task('default', ['clean'] function() {
  gulp.start('styles');
});

gulp.task('watch', function() {
  gulp.watch('assets/scss/*.scss');

  livereload.listen();
  gulp.watch(['_site/**']).on('change', livereload.changed);
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(['_site/**']).on('change', livereload.changed);
});


