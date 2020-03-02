var webpack = require('webpack');

module.exports = {
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
        publickPath : '/',
        historyApiFallback : true,
        contentBase : './public',
        proxy : {
            "**" : "http://localhost:8080"
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

    plugins : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    
    module : {
        rules : [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true
                }
            }
        ]
    }
}