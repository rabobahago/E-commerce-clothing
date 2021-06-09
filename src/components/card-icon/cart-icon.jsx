import React from "react";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";
import "./cart-icon.scss";

const CartIcon = () => (
  <div className="cart-icon">
    <ShoppingCart className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);
export default CartIcon;
