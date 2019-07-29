const bodyParser = require('body-parser');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);
const PORT = 3000;

app.use(webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath,
	noInfo: true,
}));
app.use(webpackHotMiddleware(compiler));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.route('**', (req, res) => res.status(404).send('Page Not Found'));

app.listen(PORT, () => console.log('Webserver listening on ' + PORT));
