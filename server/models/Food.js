const { Schema, model } = require('mongoose');

const foodSchema = new Schema(
  {
    name: {
      type: String
    },
    description: {
      type: String
    }
  }
);

const Food = model("Food", foodSchema);

module.exports = Food;