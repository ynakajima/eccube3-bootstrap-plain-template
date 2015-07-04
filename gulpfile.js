'use strict';
var gulp = require('gulp');
var jade = require('gulp-jade');
var rename = require('gulp-rename');

// jade
gulp.task('jade', function() {
  return gulp.src('src/jade/**/*.jade')
    .pipe(jade({
      pretty: true 
    }))
    .pipe(rename(function(path) {
      path.extname = '.twig';
    }))
    .pipe(gulp.dest('template'))
  ;
});
