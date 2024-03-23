const bcrypt = require("bcryptjs");

const bcrypt_controller = async (req, res) => {
  const body = req.body;

  //   2^10 = 1024
  // Password Hash -----
  // const salt = await bcrypt.genSalt(process.env.BCYRPT_SALT);
  //   const hash_password = await bcrypt.hash("password", salt);

  // Compare Password -----
  //   const compare_password = await bcrypt.compare(
  //     "Password",
  //     "$2a$10$kDSwdZz05Pz7RJSFVBqFvuB0rBILFIMhtGV.wVYPIUr9noKFCFFpS"
  //   );

  // Hash password from req body
  //   const salt = await bcrypt.genSalt(10);
  //   const hash_password = await bcrypt.hash(body.password, salt);
  return res.json({ message: "working" });
};

module.exports = { bcrypt_controller };
