const { Pool } = require('pg');
require('env2')('./config.env');

const options = {
  connectionString: process.env.taste_DB,
  ssl: true,
};
module.exports = new Pool(options);
