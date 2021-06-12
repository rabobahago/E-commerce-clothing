import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectICartItems } from "../../redux/cart/cart.selectors";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import "./cart-dropdown.scss";

const CartDropdown = ({ cartItem, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItem.length ? (
        cartItem.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton onClick={() => history.push("/checkout")}>
      CHECKOUT
    </CustomButton>
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItem: selectICartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
