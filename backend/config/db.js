const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

// This code connects to a MongoDB database using Mongoose. It exports a function that attempts to connect to the database using the URI stored in the environment variable MONGO_URI. If the connection is successful, it logs "MongoDB connected" to the console. If there is an error, it logs the error message and exits the process with a failure code (1).
// The code is intended to be used in a Node.js application, and it is typically called in the main server file (e.g., server.js) to establish the database connection when the server starts. The connection string should be stored in a .env file for security reasons.
