import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import Reg from "../images/reg2.jpg";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useRegister } from "../actions/userAction";
function Register() {
  const dispatch = useDispatch();
  const registerState = useSelector((state) => state.getUserReducer);

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  let name, value;
  const handleOnchanege = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.password !== userData.confirmpassword) {
      alert("password not match");
    } else {
      dispatch(useRegister(userData));
      setUserData({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
      });

      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    }
  };
  return (
    <div className="h-[calc(100vh-64px)] w-[100%] bg-gray-200 flex justify-center items-center">
      <div className="border rounded-md shadow bg-white h-[500px] min-w-[500px] w-1/2 mb-12 p-5">
        <h1 className="text-center">{registerState.message}</h1>
        <div className="grid grid-cols-2">
          <div className="p-5">
            <h1 className="text-3 xl py-5">Sign Up</h1>
            <form
              action=""
              className="max-w-md mx-auto"
              onSubmit={handleSubmit}
            >
              <div className="my-4 flex items-center  border-0 border-b-2 border-gray hover:border-b-blue-300">
                <FaUser />
                <input
                  className="focus:outline-none  px-3 w-full"
                  type="text"
                  name="username"
                  value={userData.username}
                  onChange={handleOnchanege}
                  placeholder="username"
                />
              </div>
              <div className="my-4 flex flex items-center  border-0 border-b-2 border-gray hover:border-b-blue-300">
                <IoMdMail />
                <input
                  className="focus:outline-none px-3 p-1 w-full"
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleOnchanege}
                  placeholder="Email"
                />
              </div>

              <div className="my-4 flex flex items-center  border-0 border-b-2 border-gray hover:border-b-blue-300">
                <FaLock />
                <input
                  className="focus:outline-none px-3 w-full"
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleOnchanege}
                  placeholder="password"
                  required
                />
              </div>
              <div className="my-4 flex flex items-center  border-0 border-b-2 border-gray hover:border-b-blue-300">
                <GiConfirmed />
                <input
                  className="focus:outline-none px-3 w-full"
                  type="password"
                  name="confirmpassword"
                  value={userData.confirmpassword}
                  onChange={handleOnchanege}
                  placeholder="Confirm password"
                  required
                />
              </div>
              <div className="mt-14">
                <button
                  className="border rounded bg-yellow-500 w-full p-1"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
          <div className="text-center p-5">
            <div className="p-5">
              <img className="h-[240px]" src={Reg} alt="" />
            </div>
            <div className="mt-16">
              <Link to="/login" className="underline text-red-300">
                I am already member
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
