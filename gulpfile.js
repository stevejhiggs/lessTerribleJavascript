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

gulp.task('bundle:release', function (done) {
    webpack(require('./webpack.config.release'), function (err, stats) {
        if (err) throw new gutil.PluginError('webpack:build', err);
        gutil.log('[bundle:release]', stats.toString({
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

gulp.task('default', ['bundle:dev'], function () {
});