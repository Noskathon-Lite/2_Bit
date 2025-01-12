const joi = require("joi");

const usercreateDTO = joi.object({
  name: joi
    .string()
    .regex(/^[a-zA-Z]+( [a-zA-Z]+)*$/)
    .min(2)
    .max(25)
    .required()
    .messages({
      "string.pattern.base":
        "Name can only contain letters and spaces between words.",
    }),
  email: joi.string().email().required().messages({
    "string.email": "email must be valid",
  }),
  password: joi
    .string()
    .min(8)
    .max(25)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&])[A-Za-z\d@$#!%*?&]{8,}$/
    )
    .required()
    .messages({
      "string.pattern.base":
        "Password must be at least 8 characters long, include uppercase, lowercase, digit, and special character.",
    }),
  confirmpassword: joi.string().equal(joi.ref("password")).required().messages({
    "any.only": "password and confirmpassword must be same",
  }),
  phone: joi.string().min(8).max(15).optional(),
  address: joi.string().max(30).empty(),
  image: joi.string(),
  role: joi
    .string()
    .regex(/^(student|organization)$/)
    .required()
    .messages({
      "string.pattern.base": "role can be student or organization",
    }),
});

module.exports = {
  usercreateDTO,
};
