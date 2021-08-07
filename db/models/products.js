const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, default: 0 },
  modified: { type: Date, default: Date.now },
  imageEncode: { type: mongoose.Schema.Types.Mixed },
});

module.exports = mongoose.model("Product", productSchema, "products");
