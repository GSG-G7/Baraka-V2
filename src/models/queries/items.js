const connection = require('../config/connection');

const insert = itemData => {
  const { content, isDone, listId, userId } = itemData;
  const sql = {
    text: 'INSERT INTO baraka_item (content, is_done, list_id, user_id) VALUES ($1, $2, $3, $4);',
    values: [content, isDone, listId, userId]
  };
  return connection.query(sql);
};

const selectAll = () => {
  const sql = `SELECT * FROM baraka_item;`;
  return connection.query(sql);
};

module.exports = { insert, selectAll };
