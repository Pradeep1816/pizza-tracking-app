import "./App.css";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import Adminscreen from "./components/admin/Adminscreen";
import Banner from "./components/Banner";
import Carts from "./components/Carts";
import CartsItem from "./components/CartsItem";
import Navbar from "./components/Navbar";
import OrderScreen from "./components/OrderScreen";
import PizzaSreen from "./components/PizzaScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Banner />} exact />
          <Route path="admin/*" element={<Adminscreen />} />
          <Route path="/pizzaScreen" element={<PizzaSreen />} exact></Route>
          <Route path="/cartItem" element={<CartsItem />} exact />
          <Route path="/" element={<CartsItem />} exact />
          <Route path="/register" element={<Register />} exact />
          <Route path="/login" element={<Login />} />
          <Route path="/cartItems" element={<CartsItem />} exact></Route>
          <Route path="/orderscreen" element={<OrderScreen />} exact></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
