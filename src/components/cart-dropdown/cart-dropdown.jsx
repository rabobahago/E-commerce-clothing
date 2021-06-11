import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import "./cart-dropdown.scss";

const CartDropdown = ({ cartItem }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItem.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </div>
    <CustomButton>CHECKOUT</CustomButton>
  </div>
);
const mapStateToProps = ({ cart: { cartItem } }) => ({
  cartItem,
});
export default connect(mapStateToProps)(CartDropdown);
