const { hash } = require('bcrypt');
const { signupValidate, errmsg } = require('../validation');
const { insert, find } = require('../models/queries/user');

const get = (req, res, next) => {
  res.render('signup');
};
const post = (req, res, next) => {
  const { email, username, password, confirmPassword } = req.body;
  signupValidate({ email, username, password, confirmPassword })
    .then(userInfo => hash(userInfo.password, 10))
    // make sure username is unique errmsg
    .then(hashed => insert({ email, username, password: hashed }))
    .then(() => res.redirect('/login'))
    .catch(err => {
      if (err.isJoi) res.send(errmsg(err.details[0].type));
      else next(err);
    });
};
module.exports = { get, post };
