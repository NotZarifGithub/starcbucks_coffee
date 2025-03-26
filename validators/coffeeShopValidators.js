const Joi = require('joi');

const coffeeShopSchema = Joi.object({
  name: Joi.string().min(10).max(50).required(),
  address: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  postal_code: Joi.string().required(),
  longitude: Joi.number().min(-180).max(180).required(),
  latitude: Joi.number().min(-180).max(180).required(),
  phone_number: Joi.string().required(),
  email: Joi.string().required(),
});

module.exports = coffeeShopSchema;