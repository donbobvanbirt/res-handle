const handle = require('../index.js');

const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(handle);

app.use('/', require('./api'));

module.exports = app;
