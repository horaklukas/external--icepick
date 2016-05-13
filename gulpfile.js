var gulp = require('gulp');
var envify = require('gulp-envify');
var replace = require('gulp-replace');

var srcFiles = {
  icepick: 'node_modules/icepick/icepick.js',
  typings: 'node_modules/retyped-icepick-tsd-ambient/*.d.ts'
};
var distDir = './src';
var environment = {
  NODE_ENV: 'production'
};
var replacements = require('./replacements.js')

gulp.task('build', function() {
  var stream = gulp.src(srcFiles.icepick);

  stream.pipe(envify(environment))
  replacements.icepick.forEach(function(r) {
    stream.pipe(replace(r.search, r.replacement));
  });

  return stream.pipe(gulp.dest(distDir));
});

gulp.task('typings', function() {
  var stream =  gulp.src(srcFiles.typings);

  replacements.typings.forEach(function(r) {
    stream.pipe(replace(r.search, r.replacement));
  });

  return stream.pipe(gulp.dest(distDir));
});

gulp.task('default', ['build', 'typings'])