const express = require('express');
const router = express.Router();
const Maze = require('../models/Maze'); // Import the Maze model

// Define your API routes here

// Sample route: Get all mazes
router.get('/', async (req, res) => {
  try {
    const allMazes = await Maze.find();
    res.json(allMazes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
