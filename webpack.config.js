var path = require('path');

module.exports = {
    resolve: {
        extensions: ['', '.js']
    },
    entry: [path.join(__dirname, '/public/js/script.js')],
    output: {
        path: path.join(__dirname, '/public/generated/'),
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            {test: /\.(js)$/, exclude: /node_modules/, loader: require.resolve('eslint-loader')}
        ]
    },
    plugins: []
}