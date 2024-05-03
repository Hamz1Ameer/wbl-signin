
const mongoose = require("mongoose");

// Connect to MongoDB database
mongoose.connect("mongodb+srv://ameerhamza:ameerhamza007@cluster0.leuwfwj.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Export the database connection
module.exports = db;
