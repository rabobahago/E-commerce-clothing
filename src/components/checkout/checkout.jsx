import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartTotal } from "../../redux/cart/cart.selectors";
import { selectICartItems } from "../../redux/cart/cart.selectors";
import "./checkout.scss";

const CheckoutPage = ({ cartItem, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="checkout-block">
        <span>Product</span>
      </div>
      <div className="checkout-block">
        <span>Description</span>
      </div>
      <div className="checkout-block">
        <span>Quantity</span>
      </div>
      <div className="checkout-block">
        <span>Price</span>
      </div>
      <div className="checkout-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItem.map((item) => item.name)}
    <div className="total">
      <span>
        Total:{"\u{20A6}"} {total}
      </span>
    </div>
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItem: selectICartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
