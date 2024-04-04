import React from "react";

import coronaImage from "../assets/NATURES-DISINFECTANT.png";
import postCardImage from "../assets/four-thieves-story-postcard.png";

const Product = () => {
  return (
    <div className="Product__container">
      <img src={coronaImage} className="productImage__setting" />
      <img src={postCardImage} className="productImage__setting" />
      <div className="product__info">
        <p className="productInfo__title">Health & wellness</p>
        <p className="productInfo__titleOne">Nature's Disinfectant</p>
        <p className="productInfo__titleOne">anti-viral protection</p>
        <p className="productInfo__titleTwo">SPRAY 8oz bottles</p>
      </div>
      <div className="product__price">
        <p className="productPrice__value">$29.99</p>
        <p className="productPrice__button">
          <button>Add to cart</button>
        </p>
        <p className="productPrice__quickView">Quick View</p>
      </div>
    </div>
  );
};

export default Product;
