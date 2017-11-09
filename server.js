const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.json({
    message: 'Welcome to the Server'
  });
});

app.listen(3000, e => console.log(e));
