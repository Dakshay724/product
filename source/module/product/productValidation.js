const Joi = require("joi");

const productValidation = Joi.object({
  body: Joi.object({
    name: Joi.string().required().messages({
      "any.required": "Product Name is required",
      "string.empty": "Product Name cannot be empty",
    }),
    price: Joi.number().positive().required().messages({
      "any.required": "Product Price is required",
      "number.base": "Product Price must be a number",
      "number.positive": "Product Price must be a positive number",
    }),
    category: Joi.string().required().messages({
      "any.required": "Product Category is required",
      "string.empty": "Product Category cannot be empty",
    }),
    expiry: Joi.date().required().messages({
      "any.required": "Product Expiry Date is required",
      "date.base": "Product Expiry Date must be a valid date",
    }),
    description: Joi.string().allow("").messages({
      "string.base": "Product Description must be a string",
    }),
  }),
});
const editProductValidation = Joi.object({
  body: Joi.object({
    name: Joi.string().required().messages({
      "any.required": "Product Name is required",
      "string.empty": "Product Name cannot be empty",
    }),
    price: Joi.number().positive().required().messages({
      "any.required": "Product Price is required",
      "number.base": "Product Price must be a number",
      "number.positive": "Product Price must be a positive number",
    }),
    category: Joi.string().required().messages({
      "any.required": "Product Category is required",
      "string.empty": "Product Category cannot be empty",
    }),
    expiry: Joi.date().required().messages({
      "any.required": "Product Expiry Date is required",
      "date.base": "Product Expiry Date must be a valid date",
    }),
    description: Joi.string().allow("").messages({
      "string.base": "Product Description must be a string",
    }),
  }),
});

module.exports = {
  productValidation,
  editProductValidation,
};
