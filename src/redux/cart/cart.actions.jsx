import CartActionTypes from "./cart.types";
const toggleCartHidden = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
  };
};

export default toggleCartHidden;
