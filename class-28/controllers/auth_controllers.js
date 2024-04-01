// Importing required modules
const jwt_token = require("jsonwebtoken"); // JSON Web Token for authentication
const { Users_Schema } = require("../models/Users_Model"); // Importing Users model
const bcrypt = require('bcryptjs'); // Library for password hashing

// Controller function for user signup
const signup_controller = async (req, res) => {

        // Creating user using schema.create method
        // const create_user = await Users_Schema.create({
        // });

        // Alternatively, creating user using new keyword and save method
        // const create_user = new Users_Schema({
        //     ...body
        // });
        // await create_user.save();

    try {
        // Extracting request body
        const body = req.body;

        // Generating salt and hashing password
        const salt = bcrypt.genSaltSync(10);
        const hash_password = bcrypt.hashSync(body.password, salt);

        // Creating user
        const create_user = await Users_Schema.create({
            ...body,
            password: hash_password
        });

        // Responding with success message and user data (excluding password)
        return res.json({
            data: create_user,
            message: 'User registered!'
        });
    } catch (error) {
        // Handling errors
        return res.status(500).json({
            message: 'Something went wrong!',
            error: error.message
        });
    }
};

// Controller function for user login
const login_controller = async (req, res) => {
    try {
        // Extracting request body
        const body = req.body;

        // Finding user by email
        const find_user = await Users_Schema.findOne({
            email: body.email
        });

        // Checking if user exists
        if (find_user === null) {
            return res.status(402).json({
                success: false,
                message: 'Invalid credentials!'
            });
        }

        // Comparing passwords
        const compare_password = await bcrypt.compare(body.password, find_user.password);

        // If passwords don't match, respond with error
        if (compare_password === false) {
            return res.status(402).json({
                success: false,
                message: 'Invalid credentials!'
            });
        }

        // Creating JWT token
        const token_payload = {
            user_id: find_user._id
        };
        const create_token = jwt_token.sign(token_payload, process.env.JWT_SCRET_KEY, {
            expiresIn: '1d'
        });

        // Setting JWT token as a cookie
        res.cookie('auth_token', create_token);

        // Responding with success message and user data (excluding password)
        const response_data = {
            ...find_user.toObject()
        };
        delete response_data.password;
        return res.json({
            success: true,
            data: response_data
        });
    } catch (error) {
        // Handling errors
        return res.status(500).json({
            message: 'Something went wrong!',
            error: error.message
        });
    }
};

// Controller function for checking authentication status
const check_auth_controller = async (req, res) => {
    try {
        // Retrieving token from request cookies
        const req_cookie_token = req.cookies.auth_token;

        // If token is not present, respond with error
        if (!req_cookie_token) {
            return res.status(402).json({
                success: false,
                message: 'Login required!'
            });
        }

        // Verifying JWT token
        const verify_token = jwt_token.verify(req_cookie_token, process.env.JWT_SCRET_KEY);

        // If token is invalid, respond with error
        if (!verify_token) {
            return res.status(402).json({
                success: false,
                message: 'Login required!'
            });
        }

        // If token is valid, extract user ID from token payload
        const user_id = verify_token.user_id;

        // Find user by ID and exclude password from the response
        const find_user = await Users_Schema.findById(user_id).select('-password');

        // Responding with success message and user data
        return res.json({
            success: true,
            data: find_user
        });
    } catch (error) {
        // Handling errors
        return res.status(500).json({
            message: 'Something went wrong!',
            error: error.message
        });
    }
};

// Exporting controller functions
module.exports = {
    signup_controller,
    login_controller,
    check_auth_controller
};
