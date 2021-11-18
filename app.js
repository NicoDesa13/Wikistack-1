const express = require('express');
const morgan = require('morgan');
const app = express();
//const editPage = require("./views/editPage");
const main = require("./views/main");
//const userList = require("./views/userList");
//const userPages = require("./views/userPages");
const usersRoute = require("./routes/users");
const wikiRoute = require("./routes/wiki")

const { db, Page, User } = require('./models');

const path = require('path');

app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname + '/public/stylesheets')));
app.use(morgan('dev'));


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/users', usersRoute);

try {
  app.get("/", (req, res) => {

    res.redirect('/wiki');
  })
}
catch (err) {
  console.log(err);
}

app.use('/wiki', wikiRoute);

app.get("/", (req, res) => {

  res.send(main(""));
})



app.get('/', (req, res) => {
  res.send(console.log('hello world'));
})

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

const init = async() => {
  await db.sync({ force: true });

  const PORT = 8080;

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
}

init();
