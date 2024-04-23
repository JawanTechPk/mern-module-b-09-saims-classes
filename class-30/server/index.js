// env config
require("dotenv").config();

const express = require("express");
// express instance
const app = express();
const all_routes = require("./routes/index");
const cookieParser = require("cookie-parser");
const { connect_to_database } = require("./database");
const cors = require('cors')


app.use(cors({
  origin: function (origin, callback) {
    return callback(null, true);
  },
  credentials: true,
  optionsSuccessStatus: 200
})

);
//   cors({
//     origin: function (origin, callback) {
//       return callback(null, true);
//     },
//     optionsSuccessStatus: 200,
//     credentials: true,
//   })

app.use(express.json());
app.use(cookieParser());

connect_to_database();

app.use(all_routes);

app.listen(process.env.PORT, () => {
  console.log("server is listening, Port:5000");
});
