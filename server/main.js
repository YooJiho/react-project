import express from 'express';
import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import session from 'express-session';

import api from './routes';

const app = express();
const port = 3000;
const devPort = 8080;

app.use(morgan('dev'));
app.use(bodyParser.json());

/* mongo db connection
  * cmd
  * 1. mongod
  * 2. mongo
*/
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => { console.log('Connected to mongodb server'); });
mongoose.connect('mongodb://localhost/react_project');

// use session
app.use(session({
    secret : 'jiho1q2w3e!@',
    resave : false,
    saveUninitialized : true
}));

/* handle error */
app.use(function(err, req, res, next) {
    console.log(err.stack);
    res.status(500).send('Something broke!');
});

app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/api', api);

app.get('*', (req, res) => {
    return res.sendFile(path.resolve(__dirname, './../public/index.html'));
}); 

app.listen(port, () => {
    console.log('Express is listening on port', port);
});

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
