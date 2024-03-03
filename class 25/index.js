// Importing required modules
const express = require("express");

// Sample data for todos
const { todos_data } = require("./data");

// Creating an instance of Express application
const app = express();


// --- Methods ----
// GET
// POST
// PUT
// DELETE








// Middleware to parse incoming JSON requests
app.use(express.json());

// Define routes and their corresponding handlers
// ---- GET all tasks route ----
app.get("/task", (req, res) => {
  // Return all tasks from the sample data as JSON
  return res.json({ data: todos_data });
});



// ---- GET a task by its ID route ----
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




// ---- POST a new task route ----
app.post("/task", (req, res) => {
  // Extract new task data from request body
  const new_data = req.body;

  // Return the newly added task data along with a success message
  return res.json({
    data: new_data,
    message: "Successfully added!",
  });
});





// ---- PUT update task route ----
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









// ---- Start the Express server ----
app.listen(6000, () => {
  console.log("Express server is running!");
});
