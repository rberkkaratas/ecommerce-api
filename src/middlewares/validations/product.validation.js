const joi = require("joi");
const APIError = require("../../utils/errors");

class ProductValidation {
  static createProduct = async (req, res, next) => {
    try {
      await joi.object({
        name: joi.string().trim().min(3).max(128).required().messages({
          "string.base": `"name" must be a type of 'text'`,
          "string.empty": `"name" cannot be an empty field`,
          "string.min": `"name" should have a minimum length of {#limit}`,
          "string.max": `"name" should have a maximum length of {#limit}`,
          "any.required": `"name" is a required field`,
        }),
        description: joi.string().trim().min(3).max(2048).required().messages({
          "string.base": `"description" must be a type of 'text'`,
          "string.empty": `"description" cannot be an empty field`,
          "string.min": `"description" should have a minimum length of {#limit}`,
          "string.max": `"description" should have a maximum length of {#limit}`,
          "any.required": `"description" is a required field`,
        }),
        category: joi.string().trim().min(3).max(64).required().messages({
          "string.base": `"category" must be a type of 'text'`,
          "string.empty": `"category" cannot be an empty field`,
          "string.min": `"category" should have a minimum length of {#limit}`,
          "string.max": `"category" should have a maximum length of {#limit}`,
          "any.required": `"category" is a required field`,
        }),
        image: joi.string().trim().min(3).max(2048).required().messages({
          "string.base": `"image" must be a type of 'text'`,
          "string.empty": `"image" cannot be an empty field`,
          "string.min": `"image" should have a minimum length of {#limit}`,
          "string.max": `"image" should have a maximum length of {#limit}`,
          "any.required": `"image" is a required field`,
        }),
      })
      .validateAsync(req.body);
    } catch (error) {
      throw new APIError(error.details[0].message, 400);
    }
    next();
  };
  static updateProduct = async (req, res, next) => {
    try {
      await joi.object({
        name: joi.string().trim().min(3).max(128).messages({
          "string.base": `"name" must be a type of 'text'`,
          "string.empty": `"name" cannot be an empty field`,
          "string.min": `"name" should have a minimum length of {#limit}`,
          "string.max": `"name" should have a maximum length of {#limit}`,
        }),
        description: joi.string().trim().min(3).max(2048).messages({
          "string.base": `"description" must be a type of 'text'`,
          "string.empty": `"description" cannot be an empty field`,
          "string.min": `"description" should have a minimum length of {#limit}`,
          "string.max": `"description" should have a maximum length of {#limit}`,
        }),
        category: joi.string().trim().min(3).max(64).messages({
          "string.base": `"category" must be a type of 'text'`,
          "string.empty": `"category" cannot be an empty field`,
          "string.min": `"category" should have a minimum length of {#limit}`,
          "string.max": `"category" should have a maximum length of {#limit}`,
        }),
        image: joi.string().trim().min(3).max(2048).messages({
          "string.base": `"image" must be a type of 'text'`,
          "string.empty": `"image" cannot be an empty field`,
          "string.min": `"image" should have a minimum length of {#limit}`,
          "string.max": `"image" should have a maximum length of {#limit}`,
        }),
      })
      .validateAsync(req.body);
    } catch (error) {
      throw new APIError(error.details[0].message, 400);
    }
    next();
  }
}

module.exports = ProductValidation;
