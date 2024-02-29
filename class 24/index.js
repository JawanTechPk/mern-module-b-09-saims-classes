const fs = require("fs");
const http = require("http");

// console.log("Node js is running!");
// const sum = 3 + 6;

// console.log(sum);

// ------------------------ xxxxx ------------------------

// console.log("Top level code 01");

// setTimeout(() => {
//   console.log("timeout task executed!");
// }, 0);

// console.log("Top level code 02");

// ------------------------ xxxxx ------------------------


// ----- Async task ----  Create file
// fs.writeFile("text.txt", "Hello world!", () => {
//   console.log("file created!");
// });


// ----- Sync task ---- Create file
// fs.writeFileSync("text.txt", "Hello world!");

// ------------------------ xxxxx ------------------------

// Sync task ---- Read file
// const res = fs.readFileSync("text.txt", "utf-8");
// fs.readFile("text.txt", "utf-8", (res) => {
//   console.log(res);
// });


// fs.mkdirSync("new-folder");
// fs.writeFileSync("new-folder/text.txt", "Nested content");

// ------------------------ xxxxx ------------------------

// ----- Server Creation  -----

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   res.end("Server is running!");
// });

// ----- Listening Port 8000 -----

// server.listen(8000);


// ------------------------ xxxxx ------------------------

// ----- Server Creation  -----
// const server = http.createServer((request, response) => {
//   console.log(request.url);
//   //   request;

//   if (request.url === "/products") {
//     return response.end("Products Data goes here...");
//   }
//   // return response.end("Server is ruuning!");
// });


// ----- Listening Port 8000 -----

// server.listen(5000, () => {
//   console.log(" server is running: port 5000");
// });
