import React, { useEffect, useState } from "react";
import PizaImg from "../images/piz1.jpg";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/CartAction";
function Pizza({ pizza }) {
  const [varients, setVarients] = useState("small");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const handleOnclick = async () => {
    dispatch(addToCart(pizza, varients, quantity));
  };
  return (
    <div>
      <div>
        <img className="h-[250px]" src={PizaImg} alt="" />
        <div className="text-center">{pizza.name}</div>
      </div>
      <div className="border mt-10">
        <div className="border flex justify-evenly ">
          <span>Varients</span>
          <span>Quantity</span>
        </div>
        <div className="flex justify-evenly items-center mt-2">
          <div>
            <select
              name=""
              value={varients}
              onChange={(e) => setVarients(e.target.value)}
            >
              {pizza.varients.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              className="border"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            >
              {[...Array(10).keys()].map((arr) => (
                <option value={arr + 1}>{arr + 1}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-evenly my-10">
          <div>
            <h1 className="w">
              prices: <strong>{pizza.prices[0][varients] * quantity}/rs</strong>
            </h1>
          </div>

          <button className="border w-[50px]" onClick={() => handleOnclick()}>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pizza;
