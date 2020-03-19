const express = require('express');

const app = express();

app.use('/', (req,res) => {
  res.send('Teste');
})


app.listen(8000);