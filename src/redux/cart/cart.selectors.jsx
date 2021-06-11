import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectICartItems = createSelector(
  [selectCart],
  (cartItem) => cartItem.cartItem
);

export const selectICartItemsCount = createSelector(
  [selectICartItems],
  (cartItems) =>
    cartItems.reduce((accumulatedQuantity, cartItem) => {
      return accumulatedQuantity + cartItem.quantity;
    }, 0)
);
