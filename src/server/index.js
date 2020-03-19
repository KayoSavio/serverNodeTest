require('dotenv').config();
require('module-alias/register');

const config = require('@config')
const app = require('@app');

app.listen(config.app.port,(err) => {
  if(err){
    return console.log('ERROR');
  }else{
    console.log(`Iniciou em https:/localhost:${config.app.port}`);
  }
});