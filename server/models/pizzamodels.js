const mongoose = require("mongoose");

const pizzaSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    varients: [String],
    prices: [],
    category: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timesTamps: true }
);

const PizzaModel = mongoose.model("PizzaModel", pizzaSchema);

module.exports = PizzaModel;
