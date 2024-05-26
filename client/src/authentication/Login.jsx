import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Reg from "../images/reg2.jpg";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../actions/userAction";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    dispatch(userLogin(user));
  };
  const userState = useSelector((state) => state.loginUser);
  const { success, error } = userState;
  if (success) {
    window.location.href = "/";
  }

  return (
    <div className="h-[calc(100vh-64px)] w-[100%] bg-gray-200 flex justify-center items-center">
      <div className="border rounded-md shadow bg-white h-[500px] w-[700px] w-1/2 mb-12 p-5">
        <div className="grid grid-cols-2  ">
          <div className="text-center p-5">
            <div className="p-5">
              <img className="h-[300px]" src={Reg} alt="" />
            </div>
            <div>
              <Link to="/register" className="underline text-red-300">
                Create Account
              </Link>
            </div>
          </div>
          <div className="p-5">
            <h1 className="text-3xl py-5">Sign In</h1>
            <form
              action=""
              className="max-w-md mx-auto"
              onSubmit={handleSubmit}
            >
              <div className="my-4 flex items-center  border-0 border-b-2 border-gray hover:border-b-blue-300">
                <FaUser />
                <input
                  className="focus:outline-none  px-3 w-full"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="off"
                  placeholder="username"
                />
              </div>

              <div className="my-4 flex flex items-center  border-0 border-b-2 border-gray hover:border-b-blue-300">
                <FaLock />
                <input
                  className="focus:outline-none px-3 w-full"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  required
                  autoComplete="off"
                />
              </div>
              <p className="text-sm text-red-600">{error}</p>
              <div className="my-4 flex items-center justify-between">
                <input type="checkbox" />
                <label className="mx-3" htmlFor="">
                  Remember me
                </label>
                <div className="p-2">
                  <Link to="" className="hover:underline hover:text-yellow-600">
                    Forget Password ?
                  </Link>
                </div>
              </div>
              <div className="mt-14">
                <button
                  className="border rounded bg-yellow-500 w-full p-1"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
