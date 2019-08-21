const dbconnection = require('../config/connection');

exports.getData = (req, res) => dbconnection
  .query('select * from location')
  .then((result) => res.render('home', { data: result.rows }))
  .catch((err) => console.log(err.stack));
