const dbconnection = require('../config/connection');
exports.saveData = (data) => {
  const { name, address, image, rate, user_email } = data;
  const sql = {
    text: 'INSERT INTO location (name, address, image, rate, user_email)VALUES ($1, $2, $3, $4, $5);',
    values: [name, address, image, rate, user_email]
  }
  return dbconnection.query(sql);
}
