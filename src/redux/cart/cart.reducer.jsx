import { CartActionTypes } from "./cart.types";
import { CartIteMTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";
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
        cartItem: addItemToCart(state.cartItem, action.payload),
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItem: state.cartItem.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
