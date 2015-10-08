'use strict';

var gulp = require('gulp');
var webpack = require('webpack');
var gutil = require('gulp-util');

gulp.task('bundle:dev', function (done) {
    webpack(require('./webpack.config'), function (err, stats) {
        if (err) throw new gutil.PluginError('webpack:build', err);
        gutil.log('[bundle:dev]', stats.toString({
            colors: true
        }));
        done();
    });
});

gulp.task('default', ['bundle:dev'], function () {
});
