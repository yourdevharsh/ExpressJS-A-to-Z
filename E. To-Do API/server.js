// Connect db once
const express = require('express');
const sql = require('mysql');

const app = express();

const db = sql.createConnection({
  host: 'localhost',
  username: 'username',
  password: 'password',
  database: 'todoDB'
});

// /list
app.get('/list', (req, res) => {
  db.connect((err) => {
    if (err) throw err;
    db.query('SELECT * FROM TODOS', (err, result, fields) => {
      if(err) throw error;
      result.forEach((l) => {
        const name = l['name'];
        const status = l['status'];
        res.write(`<p>${name} <span>${status}</span></p>`);
      });
    });
  });
  res.end();
});

// /add/:name
app.post('/add', (req, res) => {
  const {name} = req.body;
  const status = 'incomplete';
  db.connect((err) => {
    if (err) throw err;
    db.query(`INSERT INTO TODOS (NAME, STATUS) VALUES (?, ?)`, [name, status],(err, result) => {
      if (err) throw err;
      console.log('Added');
    });
  });
  res.send('Added');
});

// /delete/:name
app.get('/delete/:name', (req, res) => {
  const name = req.params.name;
  db.connect((err) => {
    if (err) throw err;
    db.query(`DELETE FROM TODOS WHERE name = ${name}`, (err, result) => {
      if (err) throw err;
      console.log('Deleted');
    });
  });
  res.send('Deleted');
});

app.listen(8080, ()=> {
  console.log('Running');
})