const connection = require('../config/connection');

exports.insert = itemData => {
  const { content, isDone, listId, userId } = itemData;
  const sql = {
    text: 'INSERT INTO baraka_item (content, is_done, list_id, user_id) VALUES ($1, $2, $3, $4);',
    values: [content, isDone, listId, userId]
  };
  return connection.query(sql);
};

exports.selectAll = () => {
  const sql = `SELECT * FROM baraka_item;`;
  return connection.query(sql);
};
exports.markAsDone = id => {
  const sql = {
    text: 'update baraka_item set is_done = true where id = $1',
    values: [id]
  };
  return connection.query(sql);
};
// required for formatting data
exports.getItemsWithUsernames = () => {
  const sql = `SELECT baraka_item.id, content, is_done, list_id, baraka_user.username from baraka_item inner join baraka_user ON baraka_user
  .id = baraka_item.user_id;`;
  return connection.query(sql);
};
