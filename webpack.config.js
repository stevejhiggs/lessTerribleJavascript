var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['', '.js', '.css', '.scss']
    },
    entry: [path.join(__dirname, '/public/js/script.js')],
    output: {
        path: path.join(__dirname, '/public/generated/'),
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            {test: /\.(js)$/, exclude: /node_modules/, loader: require.resolve('eslint-loader')}
        ],
        loaders: [
            {test: /\.(js)$/, exclude: /node_modules/, loader: require.resolve('babel-loader')},
            // Extract css files
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(require.resolve('style-loader'), require.resolve('css-loader'))
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(require.resolve('style-loader'), require.resolve('css-loader') + '!' + require.resolve('sass-loader'))
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin('bundle.css', {
            allChunks: true
        })
    ]
}