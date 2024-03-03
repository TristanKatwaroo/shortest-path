const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Add routes and middleware as needed

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
