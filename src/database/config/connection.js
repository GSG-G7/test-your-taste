const { Pool } = require('pg');
require('env2')('./config.env');

let dbUrl = '';

if (process.env.NODE_ENV === 'test') {
  dbUrl = process.env.test_taste_DB;
} else {
  dbUrl = process.env.taste_DB;
}

if (!dbUrl) throw new Error('No Database URL!!!');

const options = {
  connectionString: dbUrl,
  ssl: true,
};
module.exports = new Pool(options);
