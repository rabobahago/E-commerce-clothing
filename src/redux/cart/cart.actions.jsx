import { CartActionTypes } from "./cart.types";
import { CartIteMTypes } from "./cart.types";
export const toggleCartHidden = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
  };
};

export const addItem = (item) => {
  return {
    type: CartIteMTypes.ADD_ITEM,
    payload: item,
  };
};
