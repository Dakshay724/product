const Product = require("../../model/product");
const AppError = require("../../utils/appError");

const createProduct = async (request) => {
  return await Product.create({ ...request.body });
};

const getProducts = async () => {
  return await Product.find();
};

const getProduct = async (request) => {
  return await Product.findById(request.params.id);
};

const updateProduct = async (request) => {
  try {
    console.log(request.body);
    const Product = await Product.findOne({
      _id: request.params.id,
    });
    if (!Product)
      throw new AppError(404, "Product not found or not authorized");

    return await Product.findByIdAndUpdate(
      request.params.id,
      { ...request.body },
      {
        new: true,
      }
    );
  } catch (error) {
    console.log("error---", error);
    throw new AppError(error.status, error.message);
  }
};

const deleteProduct = async (request) => {
  const Product = await Product.findOne({
    _id: request.params.id,
  });
  if (!Product) throw new Error("Product not found or not authorized");
  return await Product.findByIdAndDelete(request.params.id);
};

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
