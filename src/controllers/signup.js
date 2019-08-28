const { hash } = require('bcrypt');
const { signupValidate, errmsg } = require('../validation');
const { insert, find } = require('../models/queries/user');

const get = (req, res, next) => {
  res.render('signup');
};
const post = (req, res, next) => {
  const { email, username, password, confirmPassword } = req.body;
  signupValidate({ email, username, password, confirmPassword })
    .catch(e => res.send(errmsg(e.details[0].type)))
    // make sure username is unique errmsg
    .then(() => hash(password, 10))
    .then(hashed => insert({ email, username, password: hashed }));
  // .then(() => res.redirect('/login'))
  // .catch(next);
};
module.exports = { get, post };
