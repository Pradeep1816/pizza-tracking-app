import React from "react";
import { useSelector, useDispatch } from "react-redux";
import pizza from "../images/pizza.png";
import { addToCart, deleteCart } from "../actions/CartAction";
import { RiDeleteBin6Line } from "react-icons/ri";
import {} from "../actions/userAction";
import Checkout from "./Checkout";
function CartsItem() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const cartData = cartState.cartItems;

  const userState = useSelector((state) => state.loginUser);
  const { currentUSer } = userState;
  console.log(currentUSer);
  const totalPrice = cartData.reduce((value, item) => value + item.price, 0);
  return (
    <>
      <div className="grid grid-cols-2 w-full bg-gray-100">
        <div className="min-w-[400px] border-r">
          {cartData.map((cart) => {
            return (
              <div>
                <div className="flex p-5">
                  <div className="mx-5">
                    <img className="h-[150px] p-3" src={pizza} alt="" />
                  </div>
                  <div className="">
                    <div className="flex my-2 justify-between items-center">
                      <div>
                        <strong>Quantity :</strong>
                      </div>
                      <button
                        className="ml-2 border h-[30px] w-[50px] px-3 mr-5 hover:bg-stone-600 hover:text-white"
                        onClick={() =>
                          dispatch(
                            addToCart(cart, cart.varients, cart.quantity + 1)
                          )
                        }
                      >
                        +
                      </button>
                      <p>{cart.quantity}</p>
                      <button
                        className="ml-2 border h-[30px] w-[50px] px-3 ml-5 hover:bg-stone-600 hover:text-white"
                        onClick={() =>
                          dispatch(
                            addToCart(
                              cart,
                              cart.varients,
                              cart.quantity > 1 ? cart.quantity - 1 : 1
                            )
                          )
                        }
                      >
                        -
                      </button>
                    </div>
                    <div className="my-2">
                      <strong>{cart.name}</strong>
                    </div>
                    <div className="my-2">
                      <strong>{cart.varients}</strong>
                    </div>
                    <div className="my-2">
                      <strong>Price :{cart.price}</strong>
                    </div>
                  </div>
                  <div className="ml-12 border h-[30px]">
                    <button onClick={() => dispatch(deleteCart(cart))}>
                      Remove
                    </button>
                  </div>
                </div>
                <hr className="ml-10 border" />
              </div>
            );
          })}
        </div>

        <div className="min-w-[400px] text-center">
          <div className="w-full text-center my-10">
            <strong>Payment Information</strong>
            <hr />
          </div>
          <div className="flex justify-between mx-20 items-center">
            <h1>SubTotal ({cartData.length}Items)</h1>
            <h1>RS: {totalPrice}</h1>
          </div>
          <div className="flex justify-between items-center my-5  mx-20">
            <h1>Ext. Taxes and Fees </h1>
            <h1>RS : 0</h1>
          </div>
          <hr className="my-5" />
          <div className="relative">
            <h1 className="absolute right-20">Total Price : {totalPrice}/-</h1>
          </div>

          <div className="border w-1/2 text-center my-20 mx-32 bg-yellow-500 p-1">
            <Checkout totalPrice={totalPrice} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CartsItem;
