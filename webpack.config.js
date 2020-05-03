var webpack = require('webpack');
var path = require('path');

module.exports = {
    mode : 'production',

    entry: [
            './src/index.js',
            './src/css/style.css',
    ],

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    module: {
        rules : [
            {
                test: /\.js$/,
                use : {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },

    resolve: {
        alias:{
            ROOT :  path.resolve(__dirname, 'src/')
        }
    }
};