const express = require("express");
const router = express.Router();
const userHelpers = require("../helpers/userHelpers");

router.get("/get-products", async (req, res) => {
  let products = await userHelpers.getProducts();
  res.json(products);
});

module.exports = router;
