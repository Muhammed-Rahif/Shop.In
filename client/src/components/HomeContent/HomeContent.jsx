import React, { useState, useEffect } from "react";
import { getProducts } from "../../helpers/api";
import CircleLoading from "../CircleLoading/CircleLoading";
import ProductCard from "../ProductCard/ProductCard";
import "./HomeContent.css";

function HomeContent(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((products) => {
        setProducts(products);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

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
      </div>
    </section>
  );
}

export default HomeContent;
