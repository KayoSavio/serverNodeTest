const express = require('express');

const app = express();

// Nova rota
app.use('/novarota',(req,res) => {
  res.send('Testando Rota');
})