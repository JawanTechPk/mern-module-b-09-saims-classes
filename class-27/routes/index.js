const express = require("express");
const { bcrypt_controller } = require("../controllers/bcrypt_controllers");
const router = express.Router();

router.post("/bcrypt", bcrypt_controller);

module.exports = router;
