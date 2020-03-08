import express from 'express';
import path from 'path';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
    
const app = express();
const port = 3000;
const devPort = 8080;

app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/main', (req, res) => {
    return res.send('Hello World');
});

app.listen(port, () => {
    console.log('Express is listening on port', port);
});
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');
    const config = require('../webpack.dev.config');
    const compiler = webpack(config);
    const devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(
        devPort, () => {
            console.log('webpack-dev-server is listen on port', devPort);
        }
    )
}
