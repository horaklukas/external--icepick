var gulp = require('gulp');
var envify = require('gulp-envify');

var distDir = './src';
var environment = {
  NODE_ENV: 'production'
};

gulp.task('build', function() {
  return gulp.src('node_modules/icepick/icepick.js')
    .pipe(envify(environment))
    .pipe(gulp.dest(distDir));
});

gulp.task('copy:typings', function() {
  return gulp.src('node_modules/retyped-icepick-tsd-ambient/*.d.ts')
    .pipe(gulp.dest(distDir));
});

gulp.task('default', ['build', 'copy:typings'])