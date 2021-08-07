const express = require("express");
const router = express.Router();
const ProductModel = require("../db/models/products");

// Rendering add product page
router.get("/add-product", (req, res) => {
  res.render("admin/add-product");
});

// Getting the new product
router.post("/add-product", (req, res) => {
  let productData = req.body;
  ProductModel.create(productData)
    .then((product) => {
      console.log({ product });
    })
    .catch((err) => {
      console.log({ err });
    });
});

module.exports = router;
