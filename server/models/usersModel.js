const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: { type: String, require },
    email: { type: String, require },
    password: { type: String, require },
    isAdmin: { type: Boolean, require, default: false },
  },
  { timeStamps: true }
);

// Models

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
