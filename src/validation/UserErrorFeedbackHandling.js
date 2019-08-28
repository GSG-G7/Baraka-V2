const feedBack = {
  'string.min': 'user name must be at least 2 characters long',
  'string.regex.base': 'password must be at least 8 characters long',
  'any.empty': 'All fields are required',
  'any.allowOnly': 'check your password confirmation',
  'string.email': 'not valid email'
};

module.exports = errmsg => feedBack[errmsg];
