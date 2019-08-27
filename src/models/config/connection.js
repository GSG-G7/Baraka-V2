const { Pool } = require('pg');

require('env2')('config.env');

let dbURL = '';

if (process.env.NODE_ENV === 'test') {
  dbURL = process.env.TEST_DB_URL;
} else if (process.env.NODE_ENV === 'production') {
  dbURL = process.env.DATABASE_URL;
} else {
  dbURL = process.env.DEV_DB_URL;
}

const options = {
  connectionString: dbURL,
  ssl: true
};

module.exports = new Pool(options);
