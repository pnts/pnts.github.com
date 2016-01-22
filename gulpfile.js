var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    del = require('del');


gulp.task('styles', function() {
  gulp.src('./assets/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer('last 2 version'))
      .pipe(gulp.dest('./assets/css'))
      .pipe(notify({ message: 'styles are done baking'}));
});

gulp.task('default', function() {
  gulp.watch('./assets/scss/*.scss', ['styles']);
});
