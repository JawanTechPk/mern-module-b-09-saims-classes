// Importing dotenv to load environment variables from .env file
require("dotenv").config();

// Importing required modules
const express = require("express");
const all_routes = require("./routes"); // Importing all routes from routes folder
const { connect_to_database } = require("./database"); // Importing database connection function
const cookieParser = require("cookie-parser"); // Importing cookie-parser middleware

const app = express(); // Creating express app instance

// Middleware for parsing cookies
app.use(cookieParser());

// Middleware for parsing JSON bodies
app.use(express.json());

// Connecting to the database
connect_to_database();

// Mounting all routes
app.use(all_routes);

// Starting the server and listening on the specified port from environment variables
app.listen(process.env.PORT, () => {
  console.log(`Server is listening at: ${process.env.PORT}`);
});
