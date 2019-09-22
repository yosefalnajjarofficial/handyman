const { join } = require('path');

const express = require('express');
const cookieParser = require('cookie-parser');

const router = require('./controllers');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.set('port', port);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'client', 'public')));
app.use('/api/v1', router);

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.use((err, req, res, next) => {
  console.log(req.path, err);
  res.status(500).send({ message: 'Internal Server Error', statusCode: 500 });
});

module.exports = app;
