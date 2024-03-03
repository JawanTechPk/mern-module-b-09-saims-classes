// const fs = require("fs");
const http = require("http");

// fs.writeFileSync("text.txt", "hello world!");
// fs.writeFile("text.txt", "hello world!", (err, res) => {
//   console.log("error---->", err);
//   console.log("success---->", res);
// });
// fs.mkdir("new folder", (err, res) => {
//   console.log("error---->", err);
//   console.log("success---->", res);
// });

const server = http.createServer((req, res) => {
  return res.end("server responded!");
});

server.listen(5000, () => {
  console.log("server is running, Port: 5000");
});
