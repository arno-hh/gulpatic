'use strict';

var gulp = require('gulp');
var paths = require('../config/paths');
var stylesFolder = 'styles';

var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');


gulp.task('styles', function () {
	var processors = [
		autoprefixer({browsers: ['last 1 version']}),
		cssnext()
	];

	return gulp.src(paths.src + '/' + stylesFolder + '/*.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest(paths.current + '/' + stylesFolder));
});
