const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],  // Array of ingredients
    required: true,
  },
  preparationSteps: {
    type: [String],  // Array of preparation steps
    required: true,
  },
  cookingTime: {
    type: Number,  // Time in minutes
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  spiceLevel: {
    type: String,  // Example: 'Mild', 'Medium', 'Hot'
    required: false,
  },
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
