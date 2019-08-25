const express = require('express');

const router = express.Router();
const { client, server } = require('./error');
const { getData } = require('../database/quieres/getData');
const { getForm } = require('./getForm');
const { addData } = require('./postData');


router.get('/', (req, res, next) => {
  getData()
    .then((result) => res.render('home', { data: result.rows }))
    .catch((err) => next(err.stack));
});

router.get('/getform', getForm);
router.post('/add', addData);

router.use('*', client);
router.use(server);


module.exports = router;
