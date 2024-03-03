# Server Creation Basics with Express.js Routing

This guide outlines the basic steps to create a server using Node.js and Express.js. It covers setting up a `package.json` file, installing Express.js, defining routes for HTTP methods (GET, POST, PUT, DELETE), using nodemon for development, and including a `.gitignore` file to exclude unnecessary files from version control.
ref docs: https://expressjs.com/en/starter/basic-routing.html

## Creating a `package.json` File

To initialize a `package.json` file, you can use `npm init -y` or `yarn init -y` command. This will generate a default `package.json` file with default settings.

```bash
npm init -y
```

## Installing Express.js

Express.js is a popular web framework for Node.js. Install it using npm.

```bash
npm install express
```

Express.js is a versatile web application framework for Node.js that simplifies the process of building robust web applications and APIs. It offers a clean and minimalist approach to handling HTTP requests and responses, routing, middleware integration, and more.

### Defining HTTP Methods (GET, POST, PUT, DELETE)

Express.js provides an intuitive way to handle different HTTP methods:

- **GET**: This method is used to retrieve data from the server. It's ideal for fetching resources and should not cause any changes on the server.
  
- **POST**: POST requests are commonly used for submitting data to the server, usually to create new resources or update existing ones. It's often used for form submissions and API requests with a payload.

- **PUT**: PUT requests are used to update existing resources on the server. They replace the entire resource with the new data provided in the request payload.

- **DELETE**: DELETE requests are used to remove resources from the server. They indicate the server should delete the resource specified in the request URL.

Express.js provides methods to define routes for handling each of these HTTP methods. For example:


```javascript
// Importing required modules
const express = require("express");

// Sample data for todos
const { todos_data } = require("./data");

// Creating an instance of Express application
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Define routes and their corresponding handlers

// GET all tasks route
app.get("/task", (req, res) => {
  // Return all tasks from the sample data as JSON
  return res.json({ data: todos_data });
});

// GET a task by its ID route
app.get("/task/:id", (req, res) => {
  // Extract task ID from request parameters
  const id = req.params.id;

  // Find the task in the sample data based on the ID
  const find_todo = todos_data.find((elem) => {
    return elem.id == id;
  });

  // Return the found task as JSON
  return res.json({ data: find_todo });
});

// POST a new task route
app.post("/task", (req, res) => {
  // Extract new task data from request body
  const new_data = req.body;

  // Return the newly added task data along with a success message
  return res.json({
    data: new_data,
    message: "Successfully added!",
  });
});

// PUT update task route
app.put("/task/:id", (req, res) => {
  // Extract task ID from request parameters
  const id = req.params.id;
  
  // Extract updated task data from request body
  const data = req.body;

  // Find the task in the sample data based on the ID
  const find_todo = todos_data.find((elem) => {
    return elem.id == id;
  });

  // If task not found, return 404 status code with error message
  if (!find_todo) {
    return res.status(404).json({ message: "Todo not found!" });
  }

  // Merge the existing task data with the updated data
  const update_todo = { ...find_todo, ...data };
  
  // Return the updated task data as JSON
  return res.json({ data: update_todo });
});

// Start the Express server
app.listen(6000, () => {
  console.log("Express server is running!");
});
```

## Adding nodemon for Development

Nodemon is a utility that monitors changes in your Node.js application and automatically restarts the server. It's very useful for development.

Install nodemon globally:

```bash
npm install -g nodemon
```

Then, you can start your server using nodemon:

```bash
nodemon server.js
```

## `.gitignore` File

To exclude unnecessary files from version control, you can use a `.gitignore` file. Below is a sample `.gitignore` file for Node.js projects:

```plaintext
# Dependency directories
node_modules/
```

You can copy this `.gitignore` file content and save it as `.gitignore` in the root directory of your project.

For more comprehensive `.gitignore` templates, you can refer to [GitHub's Node.js `.gitignore` template](https://github.com/github/gitignore/blob/main/Node.gitignore).