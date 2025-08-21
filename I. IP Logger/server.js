// Use trust proxy true for real IP behind proxy
const express = require('express');

const app = express();

const logger = function (req, res, next) {
  const ip = req.ip;
  console.log(ip);
  next();
}

app.set('trust proxy', true);

app.use(logger);

app.get('/', (req, res) => {
  res.end();
});

app.listen(8080, () => {
  console.log('Running');
});