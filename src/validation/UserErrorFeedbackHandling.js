const feedBack = {
  'string.min': 'Username must be at least 2 characters long',
  'string.regex.base': 'Password must be at least 8 characters long',
  'any.empty': 'All fields are required',
  'any.allowOnly': 'Check your password confirmation',
  'string.email': 'Not valid email',
  'username exists': 'Username is taken'
};

module.exports = errmsg => feedBack[errmsg];
