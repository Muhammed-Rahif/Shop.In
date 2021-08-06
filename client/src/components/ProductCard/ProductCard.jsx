import React, { useState } from "react";
import CircleLoading from "../CircleLoading/CircleLoading";
import "./ProductCard.css";

function ProductCard({
  id,
  title,
  price = 0,
  type,
  description = "",
  imageSrc,
}) {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div id="product_card">
      <div className="card">
        <div className="card-image">
          <img
            className="activator"
            src={imageSrc}
            alt={title}
            onLoad={() => {
              setImageLoading(false);
            }}
          />
          {imageLoading && (
            <div className="image-loading-wrapper">
              <CircleLoading active={imageLoading} />
            </div>
          )}
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {title}
            <i className="material-icons right">more_vert</i>
          </span>
          <p>Price : Rs.{price}</p>
          <span className="product-type grey-text text-darken-4">
            Type : {type}
          </span>
          <div className="actions">
            <button className="waves-effect waves-light btn">
              <i className="material-icons left">thumb_up</i>
            </button>
            <button className="waves-effect waves-light btn">
              <i className="material-icons left">add</i> Add to Cart
            </button>
          </div>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            {title}
            <i className="material-icons right">close</i>
          </span>
          <br />
          <p>{description}</p>
          <br />
          <div>
            <p>Price : Rs.{price}</p>
            <span className="product-type grey-text text-darken-4">
              Type : {type}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
