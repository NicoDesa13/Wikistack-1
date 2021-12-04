const express = require('express');
const morgan = require('morgan');

//const editPage = require("./views/editPage");

//const userList = require("./views/userList");
//const userPages = require("./views/userPages");


const { db, Page, User } = require('./models');

const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname + '/public')));
app.use(morgan('dev'));


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const layout = require("./views/layout");

app.get("/", (req, res) => {

  res.redirect('/wiki');
})

const usersRouter = require("./routes/users");
const wikiRouter = require("./routes/wiki");

app.use('/wiki', wikiRouter);

app.use('/users', usersRouter);

//try {
//  app.get("/", (req, res) => {

//    res.redirect('/wiki');
//  })
//}
//catch (err) {
//  console.log(err);
//}




db.authenticate()
  .then(() => {
    console.log('Connected to the Database -- WOOHOOO');
  })

const init = async() => {
  await db.sync();

  const PORT = 8080;

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
}

init();
