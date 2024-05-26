import React, { useState } from "react";
import Pizza from "./Pizza";
import { getAllPizza } from "../actions/pizzaActions";
import { useDispatch, useSelector } from "react-redux";
import Loding from "./Loding";

function Cards() {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzaState;

  console.log(pizzas, loading, error);

  useState(() => {
    dispatch(getAllPizza());
  }, []);

  return (
    <div className="min-w-[600px] w-[100%]  flex flex-wrap justify-center items-center  my-14">
      {loading ? (
        <Loding />
      ) : error ? (
        <h1>{error.message}</h1>
      ) : (
        pizzas.map((pizza, index) => {
          return (
            <div className="h-[400px] w-[200px]   mx-10 my-14" key={index}>
              <Pizza pizza={pizza} />
            </div>
          );
        })
      )}
    </div>
  );
}

export default Cards;
