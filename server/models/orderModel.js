const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    userId: { type: String },
    orderItems: [],
    shippingAddress: { type: Object },
    orderAmount: { type: Number },
    // isDeliverd: { type: String },
    transectionId: { type: String },
  },
  { timestamps: true }
);

const Order = mongoose.model("Orders", orderSchema);

module.exports = Order;
