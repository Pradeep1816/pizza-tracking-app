import React, { useState } from "react";

import { getAllPizza } from "../../actions/pizzaActions";
import { useDispatch, useSelector } from "react-redux";

import Loding from "../../components/Loding";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import pizzaImg from "../../images/pizza.png";
function PizzaList() {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzaState;

  console.log(pizzas, loading, error);

  useState(() => {
    dispatch(getAllPizza());
  }, []);
  return (
    <>
      {loading ? (
        <Loding />
      ) : error ? (
        <h1>{error.message}</h1>
      ) : (
        <div className="p-2">
          <table className="w-full">
            <thead className="text-left border-bottom-1">
              <tr>
                <th className="border">S/N</th>
                <th className="border">Image</th>
                <th className="border">Pizza Name</th>
                <th className="border">Verients</th>
                <th className="border">Prices</th>
                <th className="border">Category</th>
                <th className="border">Action</th>
              </tr>
            </thead>

            <tbody className="">
              {pizzas &&
                pizzas.map((pizza, index) => {
                  return (
                    <tr className="border">
                      <td className="border p-1">{index + 1}</td>
                      <td>
                        <img className="h-[80px]" src={pizzaImg} alt="" />
                      </td>
                      <td className="border p-1">{pizza.name}</td>
                      <td className="border p-1">
                        {pizza.varients.map((size) => (
                          <h1>{size}</h1>
                        ))}
                      </td>
                      <td className="border p-1">
                        Small: {pizza.prices[0]["small"]}
                        <br />
                        Medium :{pizza.prices[0]["medium"]}
                        <br />
                        Medium :{pizza.prices[0]["large"]}
                        <br />
                      </td>
                      <td className="border p-1">{pizza.category}</td>
                      <td className="flex">
                        <CiEdit
                          className="m-2 cursor-pointer"
                          style={{ fontSize: "20px", color: "green" }}
                        />
                        <MdDelete
                          className="m-2 cursor-pointer"
                          style={{ fontSize: "20px", color: "red" }}
                        />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default PizzaList;
