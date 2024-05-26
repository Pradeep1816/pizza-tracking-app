import React from "react";
import Bann from "../images/banner.jpg";
import Hero_pizza from "../images/hero-pizza.png";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <div
      className="flex flex-wrap   h-[calc(100vh-64px)] w-full bg-cover bg-no-repeat justify-center items-center"
      style={{ backgroundImage: `url(${Bann})` }}
    >
      <div className="w-70vh m-5 text-right text-white p-3">
        <p className="text-3xl text-yellow-600">
          <em>Delicious</em>
        </p>
        <p className="text-upper-case">Italian cuizine</p>
        <p className="text-right">
          A small river named Duden flows by their place and supplies
          <br />
          it with the neccessary regulialia.
        </p>
        <div className="mt-5 flex flex-wrap relative left-16 justify-center items-center w-[100%]">
          <Link to="pizzascreen">
            <div className="px-5 border rounded-xl bg-yellow-600 hover:bg-yellow-700 ease-in-out duration-300 flex justify-cente items-center h-14 mx-5">
              Order Now
            </div>
          </Link>
          <div className="px-5 border rounded-xl hover:bg-yellow-700 ease-in-out duration-300 bg-yellow-600 flex justify-cente items-center h-14 my-5">
            View Menu
          </div>
        </div>
      </div>
      <div className="mx-5 flex w-[70vh] p-3 flex justify-center items-center">
        <img className="ml-12 h-[400px]" src={Hero_pizza} alt="" />
      </div>
    </div>
  );
}

export default Banner;
