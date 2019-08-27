const connection = require('../config/connection');

const insert = listData => {
  const { name } = listData;
  const sql = {
    text: 'INSERT INTO baraka_list (name) VALUES ($1);',
    values: [name]
  };
  return connection.query(sql);
};

const selectAll = () => {
  const sql = `SELECT * FROM baraka_list;`;
  return connection.query(sql);
};

module.exports = { insert, selectAll };
