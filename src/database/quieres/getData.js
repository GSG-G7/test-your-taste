const dbconnection = require('../config/connection');

exports.getData = () => dbconnection
  .query('select * from location')
  .then((result) => (result.rows))
  .catch((err) => console.log(err.stack));
