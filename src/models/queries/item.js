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
  const sql = `SELECT id,content, is_done AS isDone FROM baraka_item;`;
  return connection.query(sql);
};

// required for formatting data
const getItemsWithUsernames = () => {
  const sql = `SELECT baraka_item.id, content, is_done, list_id, baraka_user.username from baraka_item inner join baraka_user ON baraka_user
  .id = baraka_item.user_id;`;
  return connection.query(sql);
};
module.exports = { insert, selectAll, getItemsWithUsernames };
