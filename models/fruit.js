const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    color: { type: String, required: true },
    readyToEat: Boolean,
  },
  {
    timestamps: true,
  }
);

const Fruit = mongoose.model("Fruit", fruitSchema);

module.exports = Fruit;
