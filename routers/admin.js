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

// Deleting a product
router.delete("/delete-product/:id", (req, res) => {
  adminHelpers
    .deleteProduct(req.params.id)
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

// Rendering edit product page with a product data
router.get("/edit-product/:id", async (req, res) => {
  let existProduct = await adminHelpers.getProduct(req.params.id);
  res.render("admin/edit-product", { existProduct });
});

// Updating a existing product
router.post("/edit-product/:id", (req, res) => {
  let id = req.params.id;
  let productData = req.body;
  productData.imageEncode = JSON.parse(productData.imageEncode);
  adminHelpers
    .updateProduct(id, productData)
    .then((product) => res.redirect("/admin"));
});

module.exports = router;
