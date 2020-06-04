  
const express = require('express');
const path = require('path');
// const db = require('../database/index.js');

const app = express();
const port = 8000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});