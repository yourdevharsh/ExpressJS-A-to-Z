const express = require('express');
const port = require('./config.js');

const app = express();

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello World');
})

app.listen(port, ()=> {
  console.log('Running');
})
