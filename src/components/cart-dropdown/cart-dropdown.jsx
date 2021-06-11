import React from "react";
import { connect } from "react-redux";
import { selectICartItems } from "../../redux/cart/cart.selectors";
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
const mapStateToProps = (state) => ({
  cartItem: selectICartItems(state),
});
export default connect(mapStateToProps)(CartDropdown);
