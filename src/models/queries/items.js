const connection = require('../config/connection');

const insert = itemData => {
  const { content, isDone, user_id, list_id } = itemData;
  const sql = {
    test: 'INSERT INTO baraka_item (content, isDone, list_id, user_id) VALUES ($1, $2, $3, $4);',
    values: [content, isDone, list_id, user_id]
  };
  return connection.query(sql);
};

const selectAll = () => {
  const sql = `SELECT * FROM baraka_item;`;
  return connection(sql);
};

module.exports = { insert, selectAll };
