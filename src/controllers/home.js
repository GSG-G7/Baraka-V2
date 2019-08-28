const { getItemsWithUsernames } = require('../models/queries/item.js');
const list = require('../models/queries/list');
const { formatData } = require('../helpers');

const get = (req, res, next) => {
  Promise.all([list.selectAll(), getItemsWithUsernames()])
    .then(result => [result[0].rows, result[1].rows])
    .then(result => formatData(...result))
    .then(console.log)
    // .then(result => res.render('home', { title: 'Baraka', result }))
    .catch(next);
};
module.exports = { get };
