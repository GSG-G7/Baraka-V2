const { join } = require('path');
const { readFileSync } = require('fs');

const connection = require('./connection');

const dbBuild = () => {
  let sql = '';
  if (process.env.NODE_ENV === 'test')
    sql = readFileSync(join(__dirname, 'test_db_build.sql')).toString();
  else sql = readFileSync(join(__dirname, 'db_build.sql')).toString();
  return connection.query(sql);
};

module.exports = { dbBuild };
