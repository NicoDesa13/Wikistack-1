const express = require("express");
const router = express.Router();
const addPage = require("../views/addPage");
const main = require("../views/main");

//GET	/wiki/	/	retrieve all wiki pages
//POST	/wiki/	/	submit a new page to the database
//GET	/wiki/add/	/add	retrieve the "add a page" form

router.get('/', (req, res, next) => {
    res.send(main());
})

router.post('/', (req, res, next) => {
    res.send('submit new to db')
})

router.get('/add', (req, res, next) => {
    res.send(addPage());
})


module.exports = router;
