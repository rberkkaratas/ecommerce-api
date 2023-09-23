const router = require("express").Router();
const {
  createProduct,
  getProductbyId,
  getAllProducts,
  updateProduct,
  deleteProduct
} = require("../controllers/product.controller");
const ProductValidation = require("../middlewares/validations/product.validation");

router.get("/get-product/:id", getProductbyId);

router.get("/get-products", getAllProducts);

router.post("/create-product", ProductValidation.createProduct ,createProduct);

router.patch("/update-product/:id", ProductValidation.updateProduct, updateProduct);

router.delete("/delete-product/:id", deleteProduct);

module.exports = router;
