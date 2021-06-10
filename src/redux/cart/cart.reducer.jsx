import { CartActionTypes } from "./cart.types";
import { CartIteMTypes } from "./cart.types";
const INITIAL_STATE = {
  hidden: true,
  cartItem: [],
};
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case CartIteMTypes.ADD_ITEM:
      return {
        ...state,
        cartItem: [...state.cartItem, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
