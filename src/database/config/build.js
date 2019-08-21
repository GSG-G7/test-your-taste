const { readFileSync } = require('fs');

const { join } = require('path');

const connection = require('./connection');

const sql = readFileSync(join(__dirname, 'database.sql')).toString();

connection
  .query(sql)
  .then(() => console.log('build run successfully'))
  .catch((err) => console.error('error ' + err.stack));
