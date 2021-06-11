import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectICartItemsCount } from "../../redux/cart/cart.selectors";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";
import "./cart-icon.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingCart className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const mapStateToProps = (state) => ({
  itemCount: selectICartItemsCount(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
