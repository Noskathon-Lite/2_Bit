const Joi = require("joi");

const eventcreateDTO = Joi.object({
  title: Joi.string().min(2).max(100).required(),
  details: Joi.string().min(10).required(),
  image: Joi.string().optional().default(null),
  link: Joi.string().uri().optional().default(null),
  location: Joi.string().optional().default(null),
  status: Joi.string()
    .regex(/^(active||inactive)$/)
    .required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  tags: Joi.array().items(Joi.string()).optional(),
});

const eventupdateDTO = Joi.object({
  title: Joi.string().min(2).max(100).required(),
  details: Joi.string().optional().default(null),
  link: Joi.string().uri().optional().default(null),
  location: Joi.string().optional().default(null),

  status: Joi.string()
    .regex(/^(active||inactive)$/)
    .required(),
  image: Joi.string().optional(),
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
});
module.exports = { eventcreateDTO, eventupdateDTO };
