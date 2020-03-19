const express = require('express');

const app = express();

app.use('/', (req,res) => {
    res.send('Teste');
  })
  
// Nova rota
app.use('/novarota',(req,res) => {
  res.send('Testando Rota');
})

module.exports = app;