export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_CART":
      const alreadyExist = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if (alreadyExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    case "DELETE_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};
