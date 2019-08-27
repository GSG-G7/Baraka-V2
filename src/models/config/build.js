const { join } = require('path');
const { readFileSync } = require('fs');

const connection = require('./connection');

const dbBuild = () => {
  const sql = readFileSync(join(__dirname, 'db_build.sql')).toString();
  const insert = readFileSync(join(__dirname, 'insert_fake_data.sql')).toString();

  return connection.query(sql).then(result => {
    if (process.env.NODE_ENV === 'test') return connection.query(insert);
    return result;
  });
};
module.exports = { dbBuild };
