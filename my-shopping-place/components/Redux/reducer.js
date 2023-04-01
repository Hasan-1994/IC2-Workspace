import { REMOVE_FROM_BASKET } from "./actions";

const initialState = {
  basketItems: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const existingItemIndex = state.basketItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex >= 0) {
        const existingItem = state.basketItems[existingItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        const updatedItems = [
          ...state.basketItems.slice(0, existingItemIndex),
          updatedItem,
          ...state.basketItems.slice(existingItemIndex + 1),
        ];
        return {
          ...state,
          basketItems: updatedItems,
        };
      } else {
        return {
          ...state,
          basketItems: [
            ...state.basketItems,
            { ...action.payload, quantity: 1 },
          ],
        };
      }
    case "REMOVE_FROM_BASKET":
      const updateIndex = state.basketItems.findIndex(
        (item) => item.id === action.payload
      );
      if (updateIndex >= 0) {
        const updatedItem = {
          ...state.basketItems[updateIndex],
          quantity: state.basketItems[updateIndex].quantity - 1,
        };
        let updatedItems;
        if (updatedItem.quantity <= 0) {
          updatedItems = [
            ...state.basketItems.slice(0, updateIndex),
            ...state.basketItems.slice(updateIndex + 1),
          ];
        } else {
          updatedItems = [
            ...state.basketItems.slice(0, updateIndex),
            updatedItem,
            ...state.basketItems.slice(updateIndex + 1),
          ];
        }
        return {
          ...state,
          basketItems: updatedItems,
        };
      } else {
        return state;
      }
    case "UPDATE_QUANTITY":
      const itemIndex = state.basketItems.findIndex(
        (item) => item.id === action.payload.productId
      );
      if (itemIndex >= 0) {
        const updatedItem = {
          ...state.basketItems[itemIndex],
          quantity: action.payload.quantity,
        };
        const updatedItems = [
          ...state.basketItems.slice(0, itemIndex),
          updatedItem,
          ...state.basketItems.slice(itemIndex + 1),
        ];
        return {
          ...state,
          basketItems: updatedItems,
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default basketReducer;
