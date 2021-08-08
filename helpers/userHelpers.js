const ProductModel = require("../db/models/products");

module.exports = {
  getProducts: () =>
    new Promise((resolve, reject) => {
      ProductModel.find()
        .then((products) => resolve(products))
        .catch((err) => reject(err));
    }),
};
