require("dotenv").config();

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt_token = require("jsonwebtoken");
const { default: axios } = require("axios");
const cheerio = require("cheerio");
const path = require("path");
const fs = require("fs");
const all_routes = require("./routes");

const app = express();

app.use(express.json());

app.use(all_routes);

app.post("/jwt-token", async (req, res) => {
  const body = req.body;

  // Sign JWT Token -------
  const jwt_payload = {
    user_id: "123456",
  };
  const jwt_secret = process.env.JWT_SECRET;
  const token = jwt_token.sign(jwt_payload, jwt_secret, { expiresIn: "1h" });

  // Verify JWT Token -------
  //   const verify_token = jwt_token.verify(
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTIzNDU2IiwiaWF0IjoxNzExMTg5NTc3LCJleHAiOjE3MTExOTMxNzd9.xQw7Ki2aYdsr1kYK8DnyAoA2IyPt4SWaVOWLcssmv-k",
  //     jwt_secret
  //   );

  // Decode JWT Token -------
  //   const decode_jwt = jwt_token.decode(
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.   eyJ1c2VyX2lkIjoiMTIzNDU2IiwiaWF0IjoxNzExMTg5NTc3LCJleHAiOjE3MTExOTMxNzd9.  xQw7Ki2aYdsr1kYK8DnyAoA2IyPt4SWaVOWLcssmv-k"
  //   );

  return res.json({ token });
});

app.get("/user-github/:username", async (req, res) => {
  const params = req.params;

  try {
    const response = await axios.get(
      `https://api.github.com/users/${params.username}`
    );

    if (response.status === 404) {
      return res.status(500).send(response.message);
    }

    const file_path = path.join(__dirname, "public/template.html");
    const load_file = fs.readFileSync(file_path);

    const $ = cheerio.load(load_file);
    const { login, avatar_url, id, node_id } = response.data;

    $("#username").text(login);
    $("#avatar").attr("src", avatar_url);
    $("#node_id").text(node_id);
    $("#id").text(id);

    return res.send($.html());
  } catch (error) {
    return res.status(500).send("Something went wrong!");
  }
});

// connect_to_database()

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at: ${process.env.PORT}`);
});
