const mongoose = require("mongoose");

// username:string
// full_name:string
// address:string
// phone:string
// gender:string
// cnic:string
// email:string
// city:string
// age:number

const Users = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  full_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const Users_Schema = mongoose.model("users", Users);

module.exports = { Users_Schema };
