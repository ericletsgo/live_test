  
const express = require('express');

const app = express();
const port = 8000;

app.get('/', function(req, res){
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});