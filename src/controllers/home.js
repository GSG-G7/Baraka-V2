const { verify } = require('jsonwebtoken');
const { getItemsWithUsernames } = require('../models/queries/item.js');
const list = require('../models/queries/list');
const { formatData } = require('../helpers');

exports.home = (req, res, next) => {
  const { token } = req.cookies;
  if (token === undefined) res.redirect('/login');
  else {
    try {
      const { username, userId } = verify(token, process.env.KEY);
      // isnt a falsy value: 0 or undefined
      if (userId)
        Promise.all([list.selectAll(), getItemsWithUsernames()])
          .then(result => [result[0].rows, result[1].rows])
          .then(result => formatData(...result))
          .then(result => res.render('home', { title: 'Baraka', result, username }))
          .catch(next);
    } catch (err) {
      next(err);
    }
  }
};
