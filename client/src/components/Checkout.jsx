import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import Loding from "./Loding";
import { placeOrder } from "../actions/orderAction";

function Checkout({ totalPrice }) {
  const dispatch = useDispatch();

  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;

  const tokenHandler = (token) => {
    dispatch(placeOrder(token, totalPrice));
    console.log(token);
  };
  return (
    <>
      {loading && <Loding />}
      {error && <h1>{error}</h1>}
      {success && <h1>{success}</h1>}
      <StripeCheckout
        name="React"
        stripeKey="pk_test_51Oyu8wSHaNZIFZfe4QwIUHzPfb6VpaWAiuNddl3VIBaFxztzxBKg7GIwyvKmlPJ4hzmKGilSAtt6LUGJGmZQZRcZ00BWWkHONn"
        amount={totalPrice * 100}
        shippingAddress
        billingAddress
        token={tokenHandler}
        currency="INR"
      >
        <button>Pay Now</button>
      </StripeCheckout>
    </>
  );
}

export default Checkout;
