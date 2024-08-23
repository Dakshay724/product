const express = require("express");
const router = express.Router();
const productController = require("./productController");
const {
  productValidation,
  editProductValidation,
} = require("./productValidation");
const validate = require("../../middleware/validate");

router.post(
  "/create",

  validate(productValidation),
  productController.createProduct
);
router.get("/products", productController.getProducts);
router.get("/search/:search", productController.getProduct);
router.put(
  "/product/:id",

  validate(editProductValidation),
  productController.updateProduct
);
router.delete("/product/:id", productController.deleteProduct);

module.exports = router;
