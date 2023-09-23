const joi = require("joi");
const APIError = require("../../utils/errors");

class AuthValidation {
  constructor() {}
  static register = async (req, res, next) => {
    try {
      await joi
        .object({
          firstname: joi.string().trim().min(3).max(32).required().messages({
            "string.base": `"firstname" must be a type of 'text'`,
            "string.empty": `"firstname" cannot be an empty field`,
            "string.min": `"firstname" should have a minimum length of {#limit}`,
            "string.max": `"firstname" should have a maximum length of {#limit}`,
            "any.required": `"firstname" is a required field`,
          }),
          lastname: joi.string().trim().min(3).max(32).required().messages({
            "string.base": `"lastname" must be a type of 'text'`,
            "string.empty": `"lastname" cannot be an empty field`,
            "string.min": `"lastname" should have a minimum length of {#limit}`,
            "string.max": `"lastname" should have a maximum length of {#limit}`,
            "any.required": `"lastname" is a required field`,
          }),
          email: joi
            .string()
            .email()
            .trim()
            .lowercase()
            .min(6)
            .max(100)
            .required()
            .messages({
              "string.base": `"email" must be a type of 'text'`,
              "string.empty": `"email" cannot be an empty field`,
              "string.email": `"email" must be a valid email`,
              "string.min": `"email" should have a minimum length of {#limit}`,
              "string.max": `"email" should have a maximum length of {#limit}`,
              "any.required": `"email" is a required field`,
            }),
          pronounce: joi.string().trim().min(3).max(32).required().messages({
            "string.base": `"pronounce" must be a type of 'text'`,
            "string.empty": `"pronounce" cannot be an empty field`,
            "string.min": `"pronounce" should have a minimum length of {#limit}`,
            "string.max": `"pronounce" should have a maximum length of {#limit}`,
            "any.required": `"pronounce" is a required field`,
          }),
          password: joi.string().trim().min(8).max(36).required().messages({
            "string.base": `"password" must be a type of 'text'`,
            "string.empty": `"password" cannot be an empty field`,
            "string.min": `"password" should have a minimum length of {#limit}`,
            "string.max": `"password" should have a maximum length of {#limit}`,
            "any.required": `"password" is a required field`,
          }),
        })
        .validateAsync(req.body);
    } catch (err) {
      throw new APIError(err.details[0].message, 400);
    }
    next();
  };
  static login = async (req, res, next) => {
    try {
      await joi
        .object({
          email: joi
            .string()
            .email()
            .trim()
            .min(6)
            .max(100)
            .required()
            .messages({
              "string.base": `"email" must be a type of 'text'`,
              "string.empty": `"email" cannot be an empty field`,
              "string.email": `"email" must be a valid email`,
              "string.min": `"email" should have a minimum length of {#limit}`,
              "string.max": `"email" should have a maximum length of {#limit}`,
              "any.required": `"email" is a required field`,
            }),
          password: joi.string().trim().min(8).max(36).required().messages({
            "string.base": `"password" must be a type of 'text'`,
            "string.empty": `"password" cannot be an empty field`,
            "string.min": `"password" should have a minimum length of {#limit}`,
            "string.max": `"password" should have a maximum length of {#limit}`,
            "any.required": `"password" is a required field`,
          }),
        })
        .validateAsync(req.body);
    } catch (err) {
      throw new APIError(err.details[0].message, 400);
    }
    next();
  };

  static forgetPassword = async (req, res, next) => {
    try {
      await joi
        .object({
          email: joi
            .string()
            .email()
            .trim()
            .min(6)
            .max(100)
            .required()
            .messages({
              "string.base": `"email" must be a type of 'text'`,
              "string.empty": `"email" cannot be an empty field`,
              "string.email": `"email" must be a valid email`,
              "string.min": `"email" should have a minimum length of {#limit}`,
              "string.max": `"email" should have a maximum length of {#limit}`,
              "any.required": `"email" is a required field`,
            })
        })
        .validateAsync(req.body);
    } catch (err) {
      throw new APIError(err.details[0].message, 400);
    }
    next();
  };

}

module.exports = AuthValidation;
