const dbconnection = require('../config/connection');

exports.getData = (req, res) => dbconnection
  .query('select * from users')
  .then((result) => result.rows)
  .catch((err) => console.log(err.stack));
