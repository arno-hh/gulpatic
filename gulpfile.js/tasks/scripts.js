'use strict';

var gulp = require('gulp');
var paths = require('../config/paths');
var scriptsFolder = 'scripts';

var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('scripts', function () {
	browserify({
		entries: paths.src + '/' + scriptsFolder + '/' + 'main.js',
		debug: true
	})
		.transform(babelify)
		.bundle()
		.pipe(source('main.bundle.js'))
		.pipe(gulp.dest(paths.current));
});
