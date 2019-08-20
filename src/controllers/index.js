const express = require('express');

const router = express.Router();
const { client, server } = require('./error');


router.get('/', (req, res) => {
    res.render('home', {
        title: 'Test your Taste',
    });
});

router.use('*', client);
router.use(server);


module.exports = router;