import React from "react";
import Logo from "../images/logo.png";
import { FaCartPlus } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUSer } from "../actions/userAction";

import "../style/dropdown.css";
function Navbar() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUser);
  const { currentUser } = userState;

  return (
    <header className="border-b bg-white flex justify-evenly sticky top-0 z-10  h-16 items-center">
      <div className="flex justify-center min-w-32 w-[20%]">
        <img src={Logo} alt="logo" />
      </div>
      <nav className="min-w-[230px] w-[30%] py-3 mx-5">
        <ul className="flex justify-evenly">
          <li className="text-yellow-300 hover:text-red-500  ease-in-out duration-300 py-4">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-red-500 ease-in-out duration-300 py-4">
            <Link to="/pizzaScreen">Menu</Link>
          </li>
          <li className="hover:text-red-500 ease-in-out duration-300 py-4 ">
            Organic
          </li>
          <li className="hover:text-red-500  ease-in-out duration-300 py-4 ">
            Contact
          </li>
        </ul>
      </nav>
      <div className="py-3 min-w-[250px] w-[20%] mx-5 flex justify-between items-center">
        <div className="flex mx-5">
          <Link to="/cartItem">
            <FaCartPlus className="" style={{ fontSize: "30px" }} />
          </Link>
          <sub className="relative ml-2">
            {currentUser ? cartState.cartItems.length : 0}
          </sub>
        </div>

        {currentUser ? (
          <>
            <div className="dropdown">
              <div className="py-2 flex w-[120px] justify-center items-center">
                <button className="dropbtn">{currentUser.username}</button>
                <FaRegCircleUser className="mx-2" />
              </div>
              <ul className="dropdown-content">
                <Link to="/orderscreen">
                  <li>Order</li>
                </Link>
                <Link to="/" onClick={() => dispatch(logoutUSer())}>
                  <li>Logout</li>
                </Link>
              </ul>
            </div>
          </>
        ) : (
          <div className="rounded-xl flex justify-center items-center mx-5 bg-yellow-300 h-10 w-[120px] hover:bg-yellow-400 ease-in-out duration-300">
            <Link to="/login">Login</Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
