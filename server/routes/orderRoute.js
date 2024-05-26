const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51Oyu8wSHaNZIFZfeMF6cgzCuZF04yuThg0S8P4iBpcNwP7ZoPGlKZjtYsULPLB95c2krU83QQsedGcdpdMPOfZx500Yi60tra3"
);
const Order = require("../models/orderModel");
router.post("/palceorder", async (req, res) => {
  const { token, totalPrice, currentUser, cartItems } = req.body;
  try {
    const customer = await stripe.customers.create({
      name: currentUser.username,
      email: token.email,
      source: token.id,
    });

    const paymentIntent = await stripe.paymentIntents.create(
      {
        amount: totalPrice * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
        payment_method_types: ["card"],
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            Pincode: token.card.zip,
            city: token.card.address_city,
            state: token.card.address_state,
            country: token.card.address_country,
          },
        },
      },

      {
        idempotencyKey: uuidv4(),
      }
    );
    if (paymentIntent) {
      const order = new Order();
      order.name = currentUser.username;
      order.email = currentUser.email;
      order.userId = currentUser._id;
      order.orderItems = cartItems;
      order.orderAmount = totalPrice;
      order.shippingAddress = {
        street: token.card.address_line1,
        city: token.card.address_city,
        country: token.card.address_country,
        Pincode: token.card.address_zip,
      };
      order.transectionId = token.card.id;
      order.save();

      res.send("payment successfull");
    } else {
      res.send("payment failed");
    }
    console.log(paymentIntent);
  } catch (error) {
    console.log(error);
  }
});

router.post("/getuserorder", async (req, res) => {
  const { userId } = req.body;
  try {
    const orders = await Order.find({ userId });
    res.status(200).send(orders);
  } catch (error) {
    res.status(200).json({ error: error.stack });
  }
});

module.exports = router;
