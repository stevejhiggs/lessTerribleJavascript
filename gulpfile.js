'use strict';

var gulp = require('gulp');
var webpack = require('webpack');
var gutil = require('gulp-util');
var eslint = require('gulp-eslint');

gulp.task('bundle:dev', function (done) {
    webpack(require('./webpack.config'), function (err, stats) {
        if (err) throw new gutil.PluginError('webpack:build', err);
        gutil.log('[bundle:dev]', stats.toString({
            colors: true
        }));
        done();
    });
});



gulp.task('watch', function () {
    webpack(require('./webpack.config')).watch({
        aggregateTimeout: 300 // wait so long for more changes
    }, function (err, stats) {
        if (err) throw new gutil.PluginError('watch', err);
        gutil.log('[watch]', stats.toString({
            colors: true
        }));
    });
});

gulp.task('lint', function () {
    return gulp.src(['public/js/**/*.js'])
        // eslint() attaches the lint output to the eslint property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failOnError last.
        .pipe(eslint.failOnError());
});

gulp.task('default', ['lint', 'bundle:dev'], function () {
});