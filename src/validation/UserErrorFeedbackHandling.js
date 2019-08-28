const feedBack = {
  'child "username" fails because ["username" length must be at least 2 characters long]':
    'user name must be at least 2 characters long',
  'child "password" fails because ["password" with value "12" fails to match the required pattern: /^[a-zA-Z0-9]{8,30}$/]]':
    'password must be at least 8 characters long',
  'child "username" fails because ["username" is not allowed to be empty]': 'password is required',
  'child "username" fails because ["password" is not allowed to be empty]':
    'password is not allowed to be empty',
  'child "confirmPassword" fails because ["confirmPassword" must be one of [ref:password]]':
    'check your password confirmation',
  'child "email" fails because ["email" must be a valid email]': 'not valid email'
};

module.exports = errmsg => feedBack[errmsg];
