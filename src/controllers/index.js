const express = require('express');

const router = express.Router();
const { client, server } = require('./error');
const {getData} = require('../database/quieres/getData');


router.get('/', getData);

router.use('*', client);
router.use(server);


module.exports = router;