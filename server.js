const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const db = require('./config/db'); // Import the db connection

app.use(express.json());

// Add routes and middleware
app.use('/api/maze', require('./routes/mazeRoutes'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
