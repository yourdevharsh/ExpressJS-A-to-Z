// Make variables to params and query
// Use return for if else res.send()
const express = require('express');

const app = express();

// /add?a=4&b=5
app.get('/add', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  res.send((a+b).toString());
});

// /sub?a=4&b=5
app.get('/sub', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  res.send((a-b).toString());
});

// /mul?a=4&b=5
app.get('/mul', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  res.send((a*b).toString());
});

// /div?a=4&b=5
app.get('/div', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (b == 0) {
    return res.send('Undefined');
  }
  res.send((a/b).toString());
});

// /incr/:num
app.get('/incr/:num', (req, res) => {
  const num = parseFloat(req.params.num);
  num++;
  res.send(num.toString());
});

app.listen(8080, () => {
  console.log('Running');
})