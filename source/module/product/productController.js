const AppError = require("../../utils/appError");
const productService = require("./productService");
const createResponse = require("../../utils/response");

const createProduct = async (request, response) => {
  try {
    const data = await productService.createProduct(request);

    if (!data) {
      throw new AppError(409, "unable to create Product. please try again");
    }
    createResponse(response, 200, "Product successfully created", data);
  } catch (error) {
    createResponse(response, error.status, error.message);
  }
};
const getProduct = async (request, response) => {
  try {
    const data = await productService.getProduct(request);

    if (!data) {
      throw new AppError(409, "unable to get Product. please try again");
    }
    createResponse(response, 200, "Product successfully fetched", data);
  } catch (error) {
    createResponse(response, error.status, error.message);
  }
};
const getProducts = async (request, response) => {
  try {
    const data = await productService.getProducts(request);

    if (!data) {
      throw new AppError(409, "unable to get Products. please try again");
    }
    createResponse(response, 200, "Products successfully fetched", data);
  } catch (error) {
    createResponse(response, error.status, error.message);
  }
};
const updateProduct = async (request, response) => {
  try {
    const data = await productService.updateProduct(request);

    if (!data) {
      throw new AppError(409, "unable to update Product. please try again");
    }
    createResponse(response, 200, "Product successfully updated", data);
  } catch (error) {
    createResponse(response, error.status, error.message);
  }
};
const deleteProduct = async (request, response) => {
  try {
    const data = await productService.deleteProduct(request);

    if (!data) {
      throw new AppError(409, "unable to delete Product. please try again");
    }
    createResponse(response, 200, "Product successfully deleted", data);
  } catch (error) {
    createResponse(response, error.status, error.message);
  }
};

module.exports = {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
