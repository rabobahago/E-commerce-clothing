import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectICartItems = createSelector(
  [selectCart],
  (item) => item.cartItem
);
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);
export const selectICartItemsCount = createSelector(
  [selectICartItems],
  (items) =>
    items.reduce((accumulatedQuantity, cartItem) => {
      return accumulatedQuantity + cartItem.quantity;
    }, 0)
);

export const selectCartTotal = createSelector([selectICartItems], (items) =>
  items.reduce((accumulatedQuantity, cartItem) => {
    return accumulatedQuantity + cartItem.quantity * cartItem.price;
  }, 0)
);
