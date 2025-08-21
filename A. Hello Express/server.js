// Use res.send() or res.end() for ending
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World'); // or end()
});

const port = 8080;

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
})