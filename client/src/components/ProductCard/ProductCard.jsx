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
      <div class="card">
        <div class="card-image">
          <img
            class="activator"
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
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">
            {title}
            <i class="material-icons right">more_vert</i>
          </span>
          <p>Price : Rs.{price}</p>
          <span class="product-type grey-text text-darken-4">
            Type : {type}
          </span>
          <div className="actions">
            <button class="waves-effect waves-light btn">
              <i class="material-icons left">thumb_up</i>
            </button>
            <button class="waves-effect waves-light btn">
              <i class="material-icons left">add</i> Add to Cart
            </button>
          </div>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
            {title}
            <i class="material-icons right">close</i>
          </span>
          <br />
          <p>{description}</p>
          <br />
          <div>
            <p>Price : Rs.{price}</p>
            <span class="product-type grey-text text-darken-4">
              Type : {type}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
