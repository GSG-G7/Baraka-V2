const { hash } = require('bcrypt');
const { signupValidate, errmsg } = require('../validation');
const user = require('../models/queries/user');

const get = (req, res, next) => {
  res.render('signup', { title: 'Sign Up' });
};
const post = (req, res, next) => {
  const { email, username, password, confirmPassword } = req.body;
  signupValidate({ email, username, password, confirmPassword })
    // make sure username is unique errmsg
    .then(() => user.find(username))
    .then(result => {
      if (result.rows.length !== 0) throw Error('username exists');
    })
    .then(() => hash(password, 10))
    .then(hashed => user.insert({ email, username, password: hashed }))
    .then(() => res.redirect('/login'))
    .catch(err => {
      if (err.isJoi) res.send(errmsg(err.details[0].type));
      else if (err.message === 'username exists') res.send(errmsg(err.message));
      else next(err);
    });
};
module.exports = { get, post };
