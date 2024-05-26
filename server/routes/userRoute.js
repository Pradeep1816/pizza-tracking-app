const express = require("express");
const router = express.Router();
const User = require("../models/usersModel");

router.post("/register", (req, res) => {
  let users = new User();

  users.username = req.body.username;
  users.email = req.body.email;
  users.password = req.body.password;
  try {
    users.save();
    res.json("Registration Succefully");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.send({ error: "username and password Invalid" });
  } else {
    if (user.password === password) {
      res.send({ status: "ok", user: user });
    } else {
      res.send({ error: "Invalid Password" });
    }
  }
});

module.exports = router;
