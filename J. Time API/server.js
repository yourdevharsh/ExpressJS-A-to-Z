const express = require('express');

const app = express();

app.get('/time', (req, res) => {
  const d = new Date();
  const time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  const date = `${d.getDate()}-${++d.getMonth()}-${d.getFullYear()}`;
  res.type('text/plain');
  res.send(`${time} ${date}`);
});

app.listen(8080, ()=> {
  console.log('Running');
})