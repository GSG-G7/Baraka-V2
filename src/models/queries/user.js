const connection = require('../config/connection');

exports.insert = userData => {
  const { username, password, email } = userData;
  const sql = {
    text: 'INSERT INTO baraka_user (username, password, email) VALUES ($1, $2, $3);',
    values: [username, password, email]
  };
  return connection.query(sql);
};

exports.selectAll = () => {
  const sql = 'SELECT * from baraka_user ;';
  return connection.query(sql);
};

exports.find = username => {
  const sql = {
    text: 'SELECT * FROM baraka_user WHERE baraka_user.username LIKE $1;',
    values: [username]
  };
  return connection.query(sql);
};
