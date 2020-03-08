//var webpack = require('webpack');

module.exports = {
    mode : 'production',

    entry: './src/index.js',

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    module: {
        rules : [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true
                }
            }
        ]
    }
};