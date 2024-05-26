import React, { useEffect } from "react";
import { getUserOrders } from "../actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import pizza from "../images/pizza.png";
function OrderScreen() {
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.getUserOrderReducer);
  const { orders, loading, error } = orderstate;
  console.log(orders);
  useEffect(() => {
    dispatch(getUserOrders());
  }, []);
  return (
    <>
      <div>
        <h1 className="text-3xl m-5">Your orders</h1>
        {loading && <h1>{error}</h1>}
        {error && <h1>something</h1>}
        {orders &&
          orders.map((order) => {
            return (
              <div className="grid grid-cols-3 m-5 p-2 rounded-xl bg-gray-100">
                <div className="">
                  {order.orderItems.map((item) => {
                    return (
                      <div className="w-full">
                        <div className="w-full top flex justify-between">
                          <div className="flex justify-center items-center ">
                            <div className="mx-5">
                              <img
                                className="h-[90px]"
                                src={pizza}
                                alt="image"
                              />
                            </div>
                            <div className="mx-5 my-5 p-5">
                              <strong>{item.name}</strong>
                              <h1>Price:{item.price}</h1>
                              <h1>Quantity :{item.quantity}</h1>
                              <h1>Varients : {item.varients}</h1>
                            </div>
                          </div>
                        </div>
                        <div className="bottom"></div>
                      </div>
                    );
                  })}
                </div>
                <div className="">
                  <div className="m-5 p-1">
                    <strong>Address</strong>
                    <hr />
                    <div className="my-3">
                      <h1>Street: {order.shippingAddress.street}</h1>
                      <h1>City: {order.shippingAddress.city}</h1>
                      <h1>Pincode: {order.shippingAddress.Pincode}</h1>
                      <h1>Country: {order.shippingAddress.country}</h1>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="m-5 p-1">
                    <strong>Order Info</strong>
                    <hr />
                    <h1 className="my-3">Order Amount: {order.orderAmount}</h1>
                    <h1 className="my-3">
                      TransectionId: {order.transectionId}
                      <h1 className="my-3">Order: {order._id}</h1>
                    </h1>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default OrderScreen;
