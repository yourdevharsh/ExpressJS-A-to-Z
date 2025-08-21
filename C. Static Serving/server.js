// __dirname is predefined
const express = require('express');
const path = require('path');

const app = express();

// For serving public directry of multiple files
app.use(express.static('public'));

// For serving main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(8080, ()=>{
  console.log('Running');
})