# **Node JS**


Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser. It is built on Chrome's V8 JavaScript engine, which compiles JavaScript into machine code, allowing it to execute faster.
## **Key Features**

- **Asynchronous and event-driven:** Node.js uses an event-driven, non-blocking I/O model, making it lightweight and efficient, particularly for handling concurrent connections and I/O-bound operations.

- **Single-threaded, non-blocking architecture:** Node.js operates on a single-threaded event loop, which means it can handle multiple connections simultaneously without the need for threading. This architecture enables high concurrency with low overhead.

- **NPM (Node Package Manager):** Node.js comes with npm, the largest ecosystem of open-source libraries in the world. npm allows developers to easily install, manage, and share reusable JavaScript code packages.

- **Server-side development:** Node.js is commonly used for server-side development, powering web servers, APIs, and backend services. It's well-suited for building real-time applications, such as chat applications and streaming services.

- **JavaScript everywhere:** With Node.js, developers can use JavaScript for both client-side and server-side development, enabling full-stack JavaScript development. This streamlines the development process and allows for code reuse between the frontend and backend.
## **Node JS Process**


![Alt Text](https://i.stack.imgur.com/vecVQ.png)



1. **Initialization program**: When you start a Node.js application, the Node.js runtime initializes itself. This involves setting up the environment, loading internal modules, and preparing to execute your code.

2. **Execute top-level code**: Once the initialization is complete, Node.js begins executing the top-level code in your JavaScript file. This includes any statements or function calls that are not inside a function or event listener.

3. **Require modules**: As your code executes, it may require external modules using the `require` function. Node.js loads these modules and executes them synchronously, ensuring that dependencies are resolved before continuing execution.

4. **Register callbacks**: In Node.js, asynchronous operations are performed using callbacks. When you perform I/O operations, network requests, or other asynchronous tasks, you provide callback functions to be executed when the operation completes. These callbacks are registered with Node.js and may be executed later, after the current execution context has finished.

5. **Start event loop**: Once the initial code execution is complete and any synchronous tasks are handled, Node.js starts its event loop. The event loop continuously checks for pending events, such as I/O operations completing or timers expiring. If an event occurs, the corresponding callback function is queued for execution.

6. **Offloading**: Node.js offloads I/O-bound tasks by performing non-blocking I/O operations. This means that instead of waiting for an I/O operation to complete, Node.js initiates the operation and continues executing other code. When the operation completes, its callback is queued for execution. This allows Node.js to handle many concurrent connections efficiently without blocking the event loop.



## **File System**

In Node.js, you can work with the file system using the built-in `fs` module. This module provides functions for interacting with the file system in a way similar to standard POSIX functions. Here's a basic overview of how you can use the `fs` module to work with files and directories in Node.js:

Ref Docs: https://nodejs.org/docs/latest/api/fs.html

 **Require the fs module**: First, you need to require the `fs` module in your Node.js application.

```javascript
const fs = require('fs');
```

 **File Operations**:
   - **Reading Files**: You can read the contents of a file using `fs.readFile()` or `fs.readFileSync()`.

   ```javascript
   // Asynchronous
   fs.readFile('file.txt', 'utf8', (err, data) => {
       if (err) throw err;
       console.log(data);
   });

   // Synchronous
   const data = fs.readFileSync('file.txt', 'utf8');
   console.log(data);
   ```

   - **Writing Files**: You can write data to a file using `fs.writeFile()` or `fs.writeFileSync()`.

   ```javascript
   // Asynchronous
   fs.writeFile('file.txt', 'Hello, World!', (err) => {
       if (err) throw err;
       console.log('File written successfully');
   });

   // Synchronous
   fs.writeFileSync('file.txt', 'Hello, World!');
   ```

   - **Appending to Files**: You can append data to a file using `fs.appendFile()` or `fs.appendFileSync()`.

   ```javascript
   // Asynchronous
   fs.appendFile('file.txt', 'More data to append', (err) => {
       if (err) throw err;
       console.log('Data appended to file');
   });

   // Synchronous
   fs.appendFileSync('file.txt', 'More data to append');
   ```

   - **Deleting Files**: You can delete a file using `fs.unlink()`.

   ```javascript
   fs.unlink('file.txt', (err) => {
       if (err) throw err;
       console.log('File deleted');
   });
   ```

 **Directory Operations**:
   - **Creating Directories**: You can create directories using `fs.mkdir()`.

   ```javascript
   fs.mkdir('newDir', (err) => {
       if (err) throw err;
       console.log('Directory created');
   });
   ```

   - **Reading Directories**: You can read the contents of a directory using `fs.readdir()`.

   ```javascript
   fs.readdir('path/to/directory', (err, files) => {
       if (err) throw err;
       console.log('Files in directory:', files);
   });
   ```

   - **Deleting Directories**: You can delete directories using `fs.rmdir()`.

   ```javascript
   fs.rmdir('dirToDelete', (err) => {
       if (err) throw err;
       console.log('Directory deleted');
   });
   ```

**Other Operations**:
   - **File Stats**: You can get information about a file using `fs.stat()`.

   ```javascript
   fs.stat('file.txt', (err, stats) => {
       if (err) throw err;
       console.log('File information:', stats);
   });
   ```

   - **Renaming Files or Directories**: You can rename files or directories using `fs.rename()`.

   ```javascript
   fs.rename('oldName.txt', 'newName.txt', (err) => {
       if (err) throw err;
       console.log('File renamed');
   });
   ```

Remember to handle errors appropriately when working with the file system in Node.js, especially in asynchronous operations where errors are handled in callback functions.
## **HTTP**

In Node.js, you can create HTTP servers and clients using the built-in `http` module. This module provides functions for handling HTTP requests and responses. Here's a basic overview of how you can use the `http` module to create HTTP servers and clients in Node.js:

Ref docs: https://nodejs.org/docs/latest/api/http.html

**Require the http module**: 

- First, you need to require the `http` module in your Node.js application.

```javascript
const http = require('http');
```

**Creating an HTTP Server**:
   - To create an HTTP server, you can use the `http.createServer()` method. You need to provide a callback function that will be executed each time the server receives a request.

```javascript
const server = http.createServer((req, res) => {
  res.end('Hello, World!\n');
});

server.listen(8000, () => {
  console.log('Server running at http://localhost:8000');
});
```

This is a basic overview of how you can work with HTTP in Node.js using the `http` module.
