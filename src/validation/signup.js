const Joi = require('@hapi/joi');

const signupSchema = Joi.object().keys({
  username: Joi.string()
    .alphanum()
    .min(2)
    .max(30)
    .required(),
  password: Joi.string()
    .regex(/^[a-zA-Z0-9]{8,30}$/)
    .required(),
  confirmPassword: Joi.ref('password'),
  email: Joi.string().email({ minDomainSegments: 2 })
});

module.exports = { signupValidate: loginData => Joi.validate(loginData, signupSchema) };
