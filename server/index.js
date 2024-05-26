const express = require("express");
const server = express();
const connectDb = require("./config/db.js");
const cors = require("cors");
const session = require("express-session");
const flash = require("express-flash");
const MongoStore = require("connect-mongo");
const getPizzaRoutes = require("./routes/pizzaRoutes.js");
const userRoute = require("./routes/userRoute.js");
const orderRoute = require("./routes/orderRoute.js");

//config env
require("dotenv").config();

//database connection
connectDb();

//session store
const sessionStore = MongoStore.create({
  mongoUrl:
    "mongodb+srv://pradeep1997:pradeep8001@pizza-app.tkmnrt3.mongodb.net/",
  dbName: "pizzashop",
  collectionName: "sessions",
  ttl: 14 * 24 * 60 * 60,
  autoRemove: "native",
});

server.use(
  session({
    secret: process.env.SECRET_COCKIE,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, //24
    store: sessionStore,
  })
);
server.use(flash());
server.use(cors());
server.use(express.json()); // this is for json file

//ROUTES
server.use("/pizzas", getPizzaRoutes);
server.use("/users", userRoute);
server.use("/login", userRoute);
server.use("/orders", orderRoute);

// server.get("/getPizzas", async (req, res) => {
//   res.send("hi");
// });

let carts = [];
server.post("/Add_to_Cart", (req, res) => {});

server.get("/get_user", (req, res) => {
  res.send(`your user name is ${req.session.username}`);
});

//declaring Port

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`server running on ${port}`);
});
