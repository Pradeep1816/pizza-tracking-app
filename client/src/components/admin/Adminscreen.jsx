import React from "react";
import { Route, Routes, Link, Router } from "react-router-dom";
import UserList from "./UserList";
import PizzaList from "./PizzaList";
import AddPizza from "./AddPizza";
import OrderList from "./OrderList";

function Adminscreen() {
  return (
    <>
      <h1 className="bg-stone-900 text-white text-center text-5xl mb-2">
        Admin Panel
      </h1>
      <div className="flex  w-full ">
        <div className="bg-white-500 w-[320px]">
          <aside
            id="default-sidebar"
            className="left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
          >
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
              <ul className="space-y-2 font-medium">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <span className="ms-3 text-3xl">Dashboard</span>
                  </a>
                </li>
                <li>
                  <Link
                    to="userlist"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      All Users
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="pizzalist"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      All Pizza
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="addpizza"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Add New Pizza
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="orderlist"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      All Orders
                    </span>
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Sign In
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Sign Up
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
        <div className="ml-5 w-full">
          <Routes>
            <Route path="userlist" element={<UserList />} />
            <Route path="pizzalist" element={<PizzaList />} />
            <Route path="addpizza" element={<AddPizza />} />
            <Route path="orderlist" element={<OrderList />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Adminscreen;
