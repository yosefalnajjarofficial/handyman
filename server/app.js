const { join } = require('path');

require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const router = require('./controllers');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(require('morgan')('dev'));
}

const port = process.env.PORT || 5000;

app.set('port', port);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'client', 'build')));
app.use('/api/v1', router);

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.use((err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(req.path, err);
  res.status(500).send({ message: 'Internal Server Error', statusCode: 500 });
});

module.exports = app;
