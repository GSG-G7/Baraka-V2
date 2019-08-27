const Joi = require('@hapi/joi');

const loginSchema = Joi.object().keys({
  username: Joi.string()
    .alphanum()
    .min(2)
    .max(30)
    .required(),
  password: Joi.string()
    .regex(/^[a-zA-Z0-9]{8,30}$/)
    .required()
});

module.exports = loginData => Joi.validate(loginData, loginSchema);
