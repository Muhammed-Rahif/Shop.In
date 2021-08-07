const express = require("express");
const router = express.Router();
const adminHelpers = require("../helpers/adminHelpers");

router.get("/", async (req, res) => {
  let products = await adminHelpers.getProducts();
  res.render("admin/view-products", { products });
});

// Rendering add product page
router.get("/add-product", (req, res) => {
  res.render("admin/add-product");
});

// Getting the new product
router.post("/add-product", (req, res) => {
  let productData = req.body;
  productData.imageEncode = JSON.parse(productData.imageEncode); // Parsing image encode
  adminHelpers
    .addProduct(productData)
    .then((response) => res.redirect("/admin"))
    .catch((err) => res.status(400));
});

router.delete("/delete-product/:id", (req, res) => {
  adminHelpers
    .deleteProduct(req.params.id)
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;
