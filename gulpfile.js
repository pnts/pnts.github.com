var gulp = require('gulp');
var sass = require('gulp-ruby-sass');


gulp.task('default', function() {

});

gulp.task('sass', function() {
  return gulp.src('./assets/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./assets/css'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch('./assets/scss/*.scss', ['sass']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'sass']);
