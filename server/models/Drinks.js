const { Schema, model } = require('mongoose');

const DrinkSchema = new Schema({
  Drink: {
    type: String,
    required: true,
  },
  Potency: {
    type: Number,
    required: true,
  },
  Volume: {
    type: Number,
    required: true,
  },
});


const Drinks = model('Drinks', DrinkSchema);

module.exports = Drinks;
