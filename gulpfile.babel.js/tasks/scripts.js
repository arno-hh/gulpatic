'use strict';

import gulp from 'gulp';
import babelify from 'babelify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';

import { paths } from '../config/paths';
const scriptsFolder = 'scripts';

gulp.task('scripts', () => {
	browserify({
		entries: paths.src + '/' + scriptsFolder + '/' + 'main.js',
		debug: true
	})
		.transform(babelify)
		.bundle()
		.pipe(source('main.bundle.js'))
		.pipe(gulp.dest(paths.current));
});
