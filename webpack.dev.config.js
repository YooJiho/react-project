var webpack = require('webpack');

module.exports = {
    mode : 'development',

    entry : [
        './src/index.js',
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server'
    ],

    output : {
        path : '/',
        filename : 'bundle.js'
    },

    devServer : {
        hot : true,
        filename : 'bundle.js',
        publicPath : '/',
        historyApiFallback : true,
        contentBase : './public',
        proxy : {
            "**" : "http://localhost:3000"
        },
        stats : {
            assets : false,
            colors : true,
            version : false,
            hash : false,
            timings : false,
            chunks : false,
            chunksModules : false
        }
    },

    module : {
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
    },

    plugins : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
}