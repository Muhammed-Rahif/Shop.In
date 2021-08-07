const express = require("express");
const router = express.Router();
const adminHelpers = require("../helpers/adminHelpers");

// Rendering add product page
router.get("/add-product", (req, res) => {
  res.render("admin/add-product");
});

// Getting the new product
router.post("/add-product", (req, res) => {
  let productData = req.body;
  adminHelpers
    .addProduct(productData)
    .then((response) => res.redirect("/admin"))
    .catch((err) => res.status(400));
});

module.exports = router;
