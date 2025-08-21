// .then() only returns response not error
const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', (req, res) => {
  axios
  .get('https://zenquotes.io/api/random')
  .then((response)=> {
    res.write(`<p> ${response.data[0].q} </p>`);
    res.write(`<p> ~${response.data[0].a} </p>`);
    res.end();
  })
  .catch((err) => {
    res.status(500).send(err.message);
  });
});

app.listen(8080, ()=> {
  console.log('Running');
});