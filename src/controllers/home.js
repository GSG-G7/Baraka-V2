const { verify } = require('jsonwebtoken');
const { getItemsWithUsernames } = require('../models/queries/item.js');
const list = require('../models/queries/list');
const { formatData } = require('../helpers');

module.exports = (req, res, next) => {
  const { token } = req.cookies;
  const userData = verify(token, process.env.KEY);
  Promise.all([list.selectAll(), getItemsWithUsernames()])
    .then(result => [result[0].rows, result[1].rows])
    .then(result => formatData(...result))
    .then(result => res.render('home', { title: 'Baraka', result }))
    .catch(next);
};
