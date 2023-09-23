const product = require("../models/product.model");
const Response = require("../utils/response");
const APIError = require("../utils/errors");

const createProduct = async (req, res) => {
  const productSave = new product(req.body);
  await productSave
    .save()
    .then((data) => {
      return new Response(data, "Product created succesfully").created(res);
    })
    .catch((err) => {
      throw new APIError("Product can not created, please try again!", 400);
    });
};

const getProductbyId = async (req, res) => {
  const { id } = req.params;

  const productInfo = await product.findById(id);

  if (!productInfo) throw new APIError("Product not found!", 404);

  return new Response(productInfo).success(res);
};

const getAllProducts = async (req, res) => {
  const productInfo = await product.find();

  if (!productInfo) throw new APIError("Product not found!", 404);

  return new Response(productInfo).success(res);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, category, image } = req.body;

  const productInfo = await product.findById(id);
  if (!productInfo) throw new APIError("Product not found!", 404);

  const productDetail = {
    name,
    description,
    category,
    image
  };
  await productInfo.updateOne({ _id: id }, productDetail, (err, data) => {
    if (err) {
      throw new APIError("Product can not updated, please try again!", 400);
    }
    return new Response(data, "Product updated succesfully").success(res);
  });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const productInfo = await product.findByIdAndDelete(id).catch((err) => {
    throw new APIError("Product can not deleted, please try again!", 400);
  });

  if (!productInfo) throw new APIError("Product not found!", 404);

  return new Response(productInfo).success(res);
};

module.exports = {
  createProduct,
  getProductbyId,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
