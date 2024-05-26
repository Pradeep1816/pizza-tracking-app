export const addToCart =
  (pizza, varients, quantity) => (dispatch, getState) => {
    const cartItem = {
      name: pizza.name,
      _id: pizza._id,
      image: pizza.image,
      varients: varients,
      quantity: quantity,
      prices: pizza.prices,
      price: pizza.prices[0][varients] * quantity,
    };
    dispatch({ type: "ADD_CART", payload: cartItem });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cartReducer.cartItems)
    );
  };

export const deleteCart = (pizzaCart) => (dispatch, getState) => {
  dispatch({ type: "DELETE_CART", payload: pizzaCart });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducer.cartItems)
  );
};
