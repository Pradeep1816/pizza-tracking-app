import axios from "axios";

export const placeOrder = (token, totalPrice) => async (dispatch, getstate) => {
  dispatch({ type: "ORDER_REQUEST" });
  const currentUser = getstate().loginUser.currentUser;
  const cartItems = getstate().cartReducer.cartItems;
  try {
    const res = await axios.post("http://localhost:8081/orders/palceorder", {
      token,
      totalPrice,
      currentUser,
      cartItems,
    });
    dispatch({ type: "ORDER_SUCCESS" });
    console.log(res.data);
  } catch (error) {
    dispatch({ type: "ORDER_FAILED", payload: error });
    console.log(error);
  }
};

export const getUserOrders = () => async (dispatch, getstate) => {
  dispatch({ type: "USER_ORDER_REQUEST" });
  try {
    const currentUser = getstate().loginUser.currentUser;

    const responce = await axios.post(
      "http://localhost:8081/orders/getuserorder",
      { userId: currentUser._id }
    );
    // console.log(responce);
    dispatch({ type: "USER_ORDER_SUCCESS", payload: responce.data });
  } catch (error) {
    dispatch({ type: "USER_ORDER_FAILED", payload: error });
  }
};
