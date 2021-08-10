import React, { useState, useEffect, useContext } from "react";
import { getProducts } from "../../helpers/api";
import CircleLoading from "../CircleLoading/CircleLoading";
import ProductCard from "../ProductCard/ProductCard";
import { SearchProductContext } from "../../contexts/Contexts";
import "./HomeContent.css";

let productsList = new Array();

function HomeContent() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { searchProduct } = useContext(SearchProductContext);

  useEffect(() => {
    getProducts()
      .then((products) => {
        setProducts(products);
        productsList = products;
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filteredProducts = products;
    if (searchProduct) {
      let query = searchProduct.toLowerCase();
      filteredProducts = productsList.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.price.toString().includes(query)
      );
    }
    setProducts(filteredProducts);
  }, [searchProduct]);

  return (
    <section id="home_content">
      <div className="products-cards row">
        {loading && (
          <center className="loading-wrapper">
            <CircleLoading active={loading} />
          </center>
        )}
        {products.map((product, key) => {
          return (
            <div className="col s12 m3" key={key}>
              <ProductCard
                id={product._id}
                title={product.name}
                description={product.description}
                type={product.type}
                imageSrc={`data:${product.imageEncode.type};base64,${product.imageEncode.data}`}
                price={product.price}
              />
            </div>
          );
        })}
        {products.length === 0 && !loading && (
          <center className="no-products-wrapper">
            <b>No products found!</b>
          </center>
        )}
      </div>
    </section>
  );
}

export default HomeContent;
