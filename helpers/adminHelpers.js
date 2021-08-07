const ProductModel = require("../db/models/products");

module.exports = {
  addProduct: (productData) =>
    new Promise((resolve, reject) => {
      ProductModel.create(productData)
        .then((product) => resolve({ status: 201, product }))
        .catch((err) => reject(err));
    }),
  getProducts: () =>
    new Promise((resolve, reject) => {
      ProductModel.find()
        .then((products) => resolve(products))
        .catch((err) => reject(err));
    }),
  deleteProduct: (id) =>
    new Promise((resolve, reject) => {
      ProductModel.findByIdAndDelete(id).then((product) =>
        resolve({ status: 200, product })
      );
    }).catch((err) => reject(err)),
};
