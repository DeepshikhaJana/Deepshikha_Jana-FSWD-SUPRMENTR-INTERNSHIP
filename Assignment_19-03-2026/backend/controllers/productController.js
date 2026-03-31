// Controller functions handle the logic for each route
import products from "../models/productModel.js";

export const getProducts = (req, res) => {
  res.status(200).json(products);
};
