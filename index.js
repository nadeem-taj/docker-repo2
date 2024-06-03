const express = require('express');
const app = express();
const port = 7000;

app.get('/', (req, res) => {
  res.send('<p style="color: blue;">Hello, World!!</p>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
