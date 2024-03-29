export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";

export const addToBasket = (product) => ({
  type: ADD_TO_BASKET,
  payload: product,
});

export const removeFromBasket = (productId) => ({
  type: REMOVE_FROM_BASKET,
  payload: productId,
});

export const updateQuantity = (productId, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { productId, quantity },
});
