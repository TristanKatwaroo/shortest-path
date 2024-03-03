const mongoose = require('mongoose');

const mazeSchema = new mongoose.Schema({
  seed: { type: String, required: true },
  // Add other maze-related fields
});

const Maze = mongoose.model('Maze', mazeSchema);

module.exports = Maze;
