# Authentication System
This project provides a simple authentication system built with Node.js, Express, and MongoDB.


#### Features
```markdown
- User signup: Allows users to create an account by providing basic information.
- User login: Users can log in with their email and password to access protected resources.
- Check authentication status: Verifies if the user is authenticated using JSON Web Tokens (JWT).
```
## Installation

```
1. Clone the repository:

```
git clone https://github.com/JawanTechPk/mern-module-b-09-saims-classes.git

```
2. Install dependencies:

```
npm install

```
3. Set up environment variables:

Create a `.env` file in the root directory and add the following variables:

```
PORT=5000
JWT_SCRET_KEY=@user_token
MONGODB_DATABASE_URI=mongodb://127.0.0.1:27017/test-database


```
4. Start the server:
```

npm start


```
## API Endpoints

### Signup

- **Endpoint**: `POST /signup`
- **Request Body**:
  ```json
  {
    "user_name": "example_user",
    "first_name": "John",
    "last_name": "Doe",
    "phone_number": "1234567890",
    "age": 25,
    "email": "example@example.com",
    "password": "password123"
  }
  ```

### Login

- **Endpoint**: `POST /login`
- **Request Body**:
  ```json
  {
    "email": "example@example.com",
    "password": "password123"
  }
  ```

### Check Authentication

- **Endpoint**: `GET /check-auth`

## cookies-parser

This project utilizes the `cookie-parser` middleware, a popular Express middleware, to handle cookies in the incoming request headers. Cookies are small pieces of data stored in the client's browser that are sent with each request to the server. 

`cookie-parser` parses these cookies and makes them available in the `req.cookies` object in the Express request object. It simplifies the process of setting, reading, and modifying cookies in the application.

In this authentication system, `cookie-parser` is used for handling authentication tokens. After a successful login, a JSON Web Token (JWT) is generated and set as a cookie in the client's browser. Subsequent requests from the client include this token in the cookie header, allowing the server to verify the user's authentication status.

By using `cookie-parser`, managing authentication tokens becomes more convenient and secure, enhancing the overall user experience and security of the application.
