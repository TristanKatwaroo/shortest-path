// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://katwarootristan:<password>@cluster0.5cnw2yo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

const mongoose = require('mongoose');
require('dotenv').config(); // Import dotenv to use environment variables

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
    console.log('Connected to MongoDB');
    console.log(`MongoDB Atlas Connection Details: ${db.host}:${db.port}/${db.name}`);

    // Sample query: Find all mazes
    // const allMazes = await Maze.find();
    // console.log('All mazes:', allMazes);
});

// Optionally, you can export the db connection if needed in other parts of your application
module.exports = db;
