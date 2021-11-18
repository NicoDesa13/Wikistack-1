const express = require('express');
//const morgan = require('morgan');
const app = express();

app.use(express.static(__dirname + '/public'));
//app.use(morgan('dev'));

app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send(console.log('hello world'));
})

const port = 8080;

app.listen(port, () => {
  console.log();
})