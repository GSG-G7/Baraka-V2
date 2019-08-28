const { hash } = require('bcrypt');

const get = (req, res, next) => {
  res.render('signup');
};
const post = (req, res, next) => {
  const { email, username, password, confirmPassword } = req.body;
  console.log(email, username, password, confirmPassword);

  res.end();
};
module.exports = { get, post };
