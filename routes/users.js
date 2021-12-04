const express = require("express");
const router = express.Router();
const { Page, User } = require('../models');
const { addPage, editPage, main, userList, userPages, wikiPage } = require("../views");
const todos = require('../models/express-models/todosTEST');


router.get('/', async(req, res, next) => {
    try {
        await res.send(todos.listPeople());
    }
    catch (error) { next(error) };
});

// GET /users/:name/tasks

router.get('/:name/tasks', async(req, res, next) => {
    todos.reset();
    todos.add('nicole', { content: "vacuum", complete: true });
    todos.add('nicole', { content: "vacuum again" });
    try {
        if (req.query.status === "complete") {
            let allTasks = todos.list(req.params.name);
            let complete = allTasks.filter(task => task.complete === true);
            console.log(complete)
            await res.send(complete);
        }
        if (req.query.status === "active") {
            let allTasks = todos.list(req.params.name);
            let active = allTasks.filter(task => task.complete === false);
            console.log(active)
            await res.send(active);
        }
        else {

            await res.send(todos.list(req.params.name));
        }
    }
    catch (error) { next(error) }
});

module.exports = router;
