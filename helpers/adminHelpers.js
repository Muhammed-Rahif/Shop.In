const ProductModel = require("../db/models/products");

module.exports = {
  addProduct: (productData) =>
    new Promise((resolve, reject) => {
      ProductModel.create(productData)
        .then((product) => {
          resolve({ status: 201, product });
        })
        .catch((err) => {
          console.log({ err });
          reject(err);
        });
    }),
};
