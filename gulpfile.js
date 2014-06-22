var gulp = require('gulp');
var sass = require('gulp-ruby-sass');


gulp.task('default', function() {
  return gulp.src('.assets/scss/*.scss')
    .pipe(sass({sourcemap: true}))
    .pipe(gulp.dest('.assets/css'));
});

