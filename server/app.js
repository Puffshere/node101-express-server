const express = require('express');
const logger = require('morgan');
const data = require('./data')

const app = express();

app.use(logger('combined'))

app.get('/', (req, res) => res.status(200).send(`Hello World`))

app.get('/data', (req, res) => res.status(200).send(data))


module.exports = app;
