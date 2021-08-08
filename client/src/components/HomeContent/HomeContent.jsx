import React, { useState, useEffect } from "react";
import { getProducts } from "../../helpers/api";
import ProductCard from "../ProductCard/ProductCard";
import "./HomeContent.css";

function HomeContent(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  return (
    <section id="home_content container">
      <div className="products-cards row">
        {products.map((product, key) => {
          console.log(
            `data:${product.imageEncode.type},base64;${product.imageEncode.data}`
          );
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
