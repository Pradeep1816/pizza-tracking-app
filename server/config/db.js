const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected To mongoDb database ${con.connection.host}`);
  } catch (error) {
    console.log(`error ${error.message}`);
  }
};
module.exports = connectDb;
