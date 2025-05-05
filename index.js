const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/hello', (req, res) => {
  res.render('index1',{text : "World" });  // Will render views/index.ejs
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
