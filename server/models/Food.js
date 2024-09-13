const { Schema, model } = require('mongoose');

const foodSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true
    }
  }
);


const Food = model('Food', foodSchema);

module.exports = Food;