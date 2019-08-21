const dbconnection = require('../config/connection');

exports.getData = (req, res) => {
    return dbconnection
    .query('select * from users')
    .then(result => console.log(result.rows))
    .catch(err => console.log(err.stack))


}