var gulp = require('gulp');
var envify = require('gulp-envify');
var replace = require('gulp-replace');

var distDir = './src';
var environment = {
  NODE_ENV: 'production'
};

gulp.task('build', function() {
  return gulp.src('node_modules/icepick/icepick.js')
    .pipe(envify(environment))
    .pipe(gulp.dest(distDir));
});

gulp.task('typings', function() {
  return gulp.src('node_modules/retyped-icepick-tsd-ambient/*.d.ts')
    .pipe(replace('declare module "icepick" {', '')) // module declaration
    .pipe(replace(/}\s*$/, '')) // module decalaration closing bracket
    .pipe(replace('\n  ', '\n')) // remove indentation at line beginning
    .pipe(gulp.dest(distDir));
});

gulp.task('default', ['build', 'typings'])