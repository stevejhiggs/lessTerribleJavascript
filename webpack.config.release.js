var webpack = require('webpack');
var commonConfig = require('./webpack.config');

var releaseConfig = Object.create(commonConfig);

releaseConfig.plugins = releaseConfig.plugins.concat(
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
);

module.exports = releaseConfig;