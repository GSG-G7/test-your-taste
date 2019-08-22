const dbconnection = require('../config/connection');

exports.getData = () => dbconnection.query('select * from location');
