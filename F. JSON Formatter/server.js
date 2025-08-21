// Use query instead of params
const express = require('express');

const app = express();

const format = function(req, res, next){
  const strJSON = req.params.json;
  req.result = [];
  let count = 0;
  
  for (let i = 0; i < strJSON.length; i++) {
    if (strJson[i] == '{') {
      count++;
      req.result.push(strJSON[i]);
      req.result.push('\n');
      for (let i = 0; i < count; i++) {
        req.result.push('\t');
      }
    } else if (strJson[i] == ',') {
      req.result.push(strJSON[i]);
      req.result.push('\n');
    }
    else if (strJSON[i] == '}') {
      count--;
      req.result.push(strJSON[i]);
      req.result.push('\n');
      for (let i = 0; i < count; i++) {
        req.result.push('\t');
      }
    } else {
      req.result.push(strJSON[i]);
    }
  }
  next();
}

app.use(format);

app.get('/:json', (req, res) => {
  const responseText = req.result.join('');
  res.type('text/plain')
  res.send(responseText);
});

app.listen(8080, () => {
  console.log('Running');
});