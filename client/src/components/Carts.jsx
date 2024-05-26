import React from "react";
import { FaCartPlus } from "react-icons/fa6";
import pizza from "../images/pizza.png";
import { useSelector } from "react-redux";
function Carts() {
  const cartState = useSelector((state) => state.cartReducer);
  const cartData = cartState.cartItems;

  console.log();
  return (
    <div className="heading  min-w-[500px] mx-auto w-1/2 bg-gray-300 py-16 overflow-y-scroll">
      <div className="flex items-center w-full p-2 border-b-2">
        <FaCartPlus className="mx-5" />
        <h1>Order Summary</h1>
      </div>
      {cartData.length === 0 ? (
        <h1>No Itmes</h1>
      ) : (
        cartData.map((cart) => {
          return (
            <div className="border pizza-list flex flex-wrap items-center justify-between p-5 ">
              <div className="min-w-[400px] flex justify-between items-center p-3">
                <div>
                  <img className="h-32" src={pizza} alt="pizza" />
                </div>
                <div className=" ml-8 w-1/2 text-center">
                  <h1>{cart.name}</h1>
                </div>
              </div>
              <div className="text-center">
                <h1>Quantity</h1>
                <span>{cart.quantity}</span>
              </div>
              <div>
                <h1>Price</h1>
                <span>{cart.price}</span>
              </div>
            </div>
          );
        })
      )}

      <hr />
      <div className="p-5 w-full  text-right ">
        <span className="mx-5 my-5">Total</span>
        <span className="mx-5">250</span>
        <div className="my-5 w-[100%] p-2">
          <form action="" className="mt-12">
            <input
              type="text"
              placeholder="Adress"
              className="w-1/2 mb-4  p-1 border outline-none"
            />
            <br />
            <input
              type="text"
              placeholder="Adress"
              className="w-1/2 mb-4 p-5 border outline-none"
            />
            <br />
            <button
              type="submit"
              className="mt-5 w-32 p-2 rounded-xl bg-yellow-500 hover:bg-yellow-600"
            >
              Order Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Carts;
