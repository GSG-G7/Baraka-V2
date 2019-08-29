const { verify } = require('jsonwebtoken');
const { list, item } = require('../models/queries/index');

exports.addList = (req, res, next) => {
  const { listName } = req.body;
  list
    .insert({ name: listName })
    .then(() => res.redirect('/'))
    .catch(next);
};

exports.addItem = (req, res, next) => {
  const { listId, content } = req.body;
  const { token } = req.cookies;
  const key = process.env.KEY;
  if (!token) {
    res.redirect('/login');
  } else {
    try {
      const decoded = verify(token, key);
      const { userId } = decoded;
      const itemInfo = { content, isDone: false, listId, userId };
      item
        .insert(itemInfo)
        .then(() => res.redirect('/'))
        .catch(next);
    } catch (err) {
      next(err);
    }
  }
};
exports.markAsDone = (req, res, next) => {
  const { id } = req.body;
  item
    .markAsDone(id)
    .then(() => res.redirect('/'))
    .catch(next);
};
