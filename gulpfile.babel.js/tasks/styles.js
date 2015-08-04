'use strict';

import gulp from 'gulp';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnext from 'cssnext';

import { paths } from '../config/paths';
const stylesFolder = 'styles';

gulp.task('styles', () => {
	var processors = [
		autoprefixer({browsers: ['last 1 version']}),
		cssnext()
	];

	return gulp.src(paths.src + '/' + stylesFolder + '/*.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest(paths.current + '/' + stylesFolder));
});
