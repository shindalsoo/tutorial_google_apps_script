const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // res.send('Hello World');
    res.render("../views/index", {
        title: 'MongoDB_CRUD'
    });
})

router.get('/add', (req, res) => {
    res.render("../views/add_doc");
})

router.post('add', (req, res) => {
    req.body.Subject
    req.body.LastStatus
    req.body.WriteUserName
    req.body.BodyDesc
    req.body.Thumbnail
})

module.exports = router;