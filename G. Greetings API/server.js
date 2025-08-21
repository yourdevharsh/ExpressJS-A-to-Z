// Robust Error Handling
// No concatenation in res.send()
// Set content type
const express = require('express');

const app = express();

// /greet?name=john
app.get('/greet', (req, res) => {
  try {
    const name = req.query.name;
    res.set('Content-Type', 'text/html');
    if (!name) {
      return res.status(400).send('<h1> Name is not required </h1>');
    }
    res.write(`<h1> Hey ${name}!!! </h1>`);
    res.write('<p>Welcome to my website. </p>');
    res.end();
  }
  catch (e) {
    return res.status(500).send('Invalid Name');
  }
});

app.listen(8080, () => {
  console.log('Running');
})