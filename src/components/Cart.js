import React from "react";
import "../components/CSS/home.css";

import Login from "./Login";
import ProductImage from "../assets/NATURES-DISINFECTANT.png";

const Cart = () => {
  return (
    <div className="Home__container">
      <div className="semiHeader__container">
        <div className="Home__paddingSemiHeader">
          <p className="semiHeader__title">Cart</p>
          <div className="contactUs__semiHeader">
            <p className="contactUs__us">Contact Us</p>
            <p className="contactUs__email">info@tennisfairplay.com</p>
          </div>
        </div>
      </div>
      <div className="HomeDetail__container">
        <div className="main__homeContainer">
          <div className="main__paddingHome">
            <div className="CartMain__Container">
              <div className="cartMain__title">
                <a href="/cart" className="cartTitle__a">
                  shopping cart
                </a>
                <span style={{ color: "#bbbbbb" }}>{`>`}</span>
                <p className="cartTitle__path">Checkout details</p>
                <span style={{ color: "#bbbbbb" }}>{`>`}</span>
                <p className="cartTitle__path">order complete</p>
              </div>
              <div className="cartMain__productTitle">
                <div className="cartMainProduct__one">&nbsp;</div>
                <div className="cartMainProduct__two">&nbsp;</div>
                <div className="cartMainProduct__three">product</div>
                <div className="cartMainProduct__four">price</div>
                <div className="cartMainProduct__five">quantity</div>
                <div className="cartMainProduct__six">subtotal</div>
              </div>
              <div className="cartMain__productContainer">
                <div className="cartMain__productClose">x</div>
                <div className="cartMain__productImage">
                  <img src={ProductImage} />
                </div>
                <div className="cartMain__productDetail">
                  NATURE'S DISINFECTANT ANTI-VIRAL PROTECTION SPRAY 8oz bottles
                </div>
                <div className="cartMain__productPrice">$29.99</div>
                <div className="cartMain__productQuantity">1</div>
                <div className="cartMain__productSubtotal">$29.99</div>
              </div>
              <div className="cartMain__buttonContainer">
                <div className="cartMain__couponContainer">
                  <input placeholder="Coupon code" />
                  <button>Apply coupon</button>
                </div>
                <button className="cartMain__updateButton">update cart</button>
              </div>
            </div>
          </div>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default Cart;
