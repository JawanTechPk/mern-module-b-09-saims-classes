const express = require("express");
// Importing controllers for handling signup, login, and authentication checks
const { signup_controller, login_controller, check_auth_controller } = require("../controllers/auth_controllers");
const router = express.Router();

// Route for user signup
router.post('/signup', signup_controller);

// Route for user login
router.post('/login', login_controller);

// Route for checking authentication status
router.get('/check-auth', check_auth_controller);

// Exporting the router for use in other files
module.exports = router;
