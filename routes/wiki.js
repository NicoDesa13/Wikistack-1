const express = require("express");
const router = express.Router();
const { Page, User } = require('../models');
const { addPage, editPage, main, userList, userPages, wikiPage } = require("../views");


//GET	/wiki/	/	retrieve all wiki pages
//POST	/wiki/	/	submit a new page to the database
//GET	/wiki/add/	/add	retrieve the "add a page" form
//localhost:8080/wiki/

router.get('/', async(req, res, next) => {
    try {
        const pages = await Page.findAll();
        res.send(main(pages));
    }
    catch (error) { next(error) };
})

router.post('/', async(req, res, next) => {
    const page = new Page(req.body);
    try {
        await page.save();
        res.redirect(`/wiki/${page.slug}`);
    }
    catch (error) { next(error) }


    /*try {
        const page = await Page.create({
            title: req.params.title,
            content: req.params.content,
            status: req.params.status
        });

        // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
        res.redirect('/');
    }
    catch (error) { next(error) }*/
});



router.get('/add', (req, res, next) => {
    res.send(addPage());
})

router.get('/:slug', async(req, res, next) => {
    try {
        const page = await Page.findOne({
            where: {
                slug: req.params.slug
            }
        });
        res.send(wikiPage(page));
    }
    catch (error) { next(error) }
});

module.exports = router;
