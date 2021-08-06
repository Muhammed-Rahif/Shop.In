import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./HomeContent.css";

function HomeContent(props) {
  const products = [
    {
      id: 0,
      imageSrc:
        "https://raw.githubusercontent.com/rookiemonkey/dummy-products-api/master/products/gadgets/smartwatch_600.png",
      title: "Smart Watch 2.0",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat ratione sapiente. Eligendi laboriosam excepturi commodi! Libero rem odio voluptate maiores odit quo.",
      type: "Mobile",
      price: 12000,
    },
    {
      id: 0,
      imageSrc:
        "https://raw.githubusercontent.com/rookiemonkey/dummy-products-api/master/products/gadgets/mobilephone_600.png",
      title: "Smart Watch 2.0",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat ratione sapiente. Eligendi laboriosam excepturi commodi! Libero rem odio voluptate maiores odit quo.",
      type: "Mobile",
      price: 34000,
    },
    {
      id: 0,
      imageSrc:
        "https://raw.githubusercontent.com/rookiemonkey/dummy-products-api/master/products/gadgets/actioncamera_600.png",
      title: "Smart Watch 2.0",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat ratione sapiente. Eligendi laboriosam excepturi commodi! Libero rem odio voluptate maiores odit quo.",
      type: "Mobile",
      price: 65000,
    },
    {
      id: 0,
      imageSrc:
        "https://raw.githubusercontent.com/rookiemonkey/dummy-products-api/master/products/gadgets/drone_600.png",
      title: "Smart Watch 2.0",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quaerat ratione sapiente. Eligendi laboriosam excepturi commodi! Libero rem odio voluptate maiores odit quo.",
      type: "Mobile",
      price: 45000,
    },
  ];

  return (
    <section id="home_content container">
      <div className="products-cards row">
        {products.map((product, key) => {
          return (
            <div className="col s12 m3" key={key}>
              <ProductCard
                id={product.id}
                title={product.title}
                description={product.description}
                type={product.type}
                imageSrc={product.imageSrc}
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
