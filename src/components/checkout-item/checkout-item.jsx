import React from "react";
import "./checkout-item.scss";

const CheckoutItem = ({ cartItem: { name, price, imageUrl, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img alt="item" src={imageUrl} />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">
      {"\u{20A6}"}
      {price}
    </span>
    <div className="remove-button">&#10005;</div>
  </div>
);

export default CheckoutItem;
