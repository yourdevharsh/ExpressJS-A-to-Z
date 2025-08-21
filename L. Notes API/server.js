const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

const jsonPath = path.join(__dirname, 'data.json');

// /notes
app.get('/notes', (req, res) => {
  fs.readFile(jsonPath, 'utf-8', (error, data) => {
    if (error) {
      return res.status(500).send('Sorry, unable to fetch');
    }
    try {
      const parsedData = JSON.parse(data);
      const keys = Object.keys(parsedData);
      res.type('text/html');
      keys.forEach((i) => {
        res.write(`<h4><span>${i}</span>${parsedData[i]['title']}</h4>`);
        res.write(`<p>${parsedData[i]['text']}</p>`);
        res.write(`<p>${parsedData[i]['date']}</p>`);
        res.write('<hr>');
      });
      res.end();
    } catch (parseError) {
      res.status(500).send('Parse Error');
    }
  });
});

// /notes/save
app.post('/notes/save', (req, res) => {
  const { title, text } = req.body;

  if (!title || !text) {
    return res.status(400).send('Title and text are required');
  }

  fs.readFile(jsonPath, 'utf-8', (error, data) => {
    if (error) {
      return res.status(500).send('Sorry, error occurred');
    }
    try {
      const parsedData = JSON.parse(data);
      const len = Object.keys(parsedData).length;

      const d = new Date();
      parsedData[`${len + 1}`] = {
        title: title,
        text: text,
        date: `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`
      };

      fs.writeFile(jsonPath, JSON.stringify(parsedData, null, 2), 'utf-8', (error) => {
        if (error) {
          return res.status(500).send('Sorry, an error occurred');
        }
        console.log('Saved');
        res.send('Note saved successfully');
      });
    } catch (error) {
      res.status(500).send('Parse Error');
    }
  });
});

// /notes/remove
app.delete('/notes/remove/:index', (req, res) => {
  const index = req.params.index;

  fs.readFile(jsonPath, 'utf-8', (error, data) => {
    if (error) {
      return res.status(500).send('Sorry, error occurred');
    }
    try {
      const parsedData = JSON.parse(data);
      if (!parsedData[index]) {
        return res.status(404).send('Note not found');
      }

      delete parsedData[index];

      fs.writeFile(jsonPath, JSON.stringify(parsedData, null, 2), 'utf-8', (error) => {
        if (error) {
          return res.status(500).send('Sorry, an error occurred');
        }
        console.log('Deleted');
        res.send('Note deleted successfully');
      });
    } catch (error) {
      res.status(500).send('Parse Error');
    }
  });
});

app.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});