const connection = require('../config/connection');

exports.insert = listData => {
  const { name } = listData;
  const sql = {
    text: 'INSERT INTO baraka_list (name) VALUES ($1);',
    values: [name]
  };
  return connection.query(sql);
};

exports.selectAll = () => {
  const sql = `SELECT * FROM baraka_list;`;
  return connection.query(sql);
};
