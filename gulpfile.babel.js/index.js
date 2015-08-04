'use strict';

// Require all tasks in /gulpfile.js/tasks, including subfolders
import requireDir from 'require-dir';

requireDir('./tasks', {
	recurse: true
});
