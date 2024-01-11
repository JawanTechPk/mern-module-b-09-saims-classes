import React, { useState } from "react";
import { Input_Field } from "./Input_Field";

const Signup_Form = () => {
  const [user_data, setUserData] = useState({
    // username:'',
    // email:'',
    // password:''
  });
  const [showDetails, setShowDetails] = useState(false);

  //   user_data.username ='user'
  //   user_data['username'] ='user'

  // let arr = [1,3,4,5,6]
  // arr[2]

  const userDataHandle = (val, key) => {
    // console.log("val:", val);
    // console.log("key:", key);
    const obj = { ...user_data };

    obj[key] = val;

    setUserData(obj);
  };

  //   userDataHandle("user 01", "username");

  console.log(user_data);

  const submitHandle = () => {
    setShowDetails(true);
  };

  return (
    <div>
      {showDetails === true ? (
        <div>
          <h4>Username : {user_data.username}</h4>
          <h4>Email : {user_data.email}</h4>
          <h4>Password : {user_data.password}</h4>
          <h4>Confirm Password : {user_data.confirm_password}</h4>
        </div>
      ) : (
        <div>
          <h1>Signup_Form</h1>

          <div>
            <Input_Field
              id="username"
              placeholder="Enter Username"
              type="text"
              onChangeHandle={userDataHandle}
            />
            <Input_Field
              id="email"
              placeholder="Email"
              type="email"
              onChangeHandle={userDataHandle}
            />
            <Input_Field
              id="password"
              placeholder="Password"
              type="password"
              onChangeHandle={userDataHandle}
            />
            <Input_Field
              id="confirm_password"
              placeholder="Confirm Password"
              type="password"
              onChangeHandle={userDataHandle}
            />
            <button onClick={submitHandle}>Submit Details</button>
          </div>
        </div>
      )}
    </div>
  );
};

export { Signup_Form };
