const app = require('@app');
const config = require('@config')

module.exports = (err) => {
  if(err){
      return console.log('Erro ao conectar ao banco de dados');
  }else{
      
app.listen(config.app.port,(err) => {
    if(err){
      return console.log('ERROR');
    }else{
      console.log(`Iniciou em https:/localhost:${config.app.port}`);
    }
  });
  }
};


