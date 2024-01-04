import React, { useState } from "react";

export const Signup_Component = () => {
  const [data, setData] = useState({});
  const [show_data, setShow_data] = useState(false);

  //   data['username'] = 'Ali'
  //   data.username = 'Ali'

  const data_update_handle = (key, value) => {
    // console.log("key", key);
    // console.log("value", value);
    setData((pre_obj) => {
      return { ...pre_obj, [key]: value };
    });
    // console.log(data);
  };

  const show_data_handle = () => {
    setShow_data(true);
  };

  return (
    <div className="bg-primary h-[100dvh] grid place-items-center ">
      {show_data ? (
        <div className="bg-white px-3 py-4">
          <h1>Username: {data.username}</h1>
          <h1>Email: {data.email}</h1>
          <h1>Country: {data.country}</h1>
        </div>
      ) : (
        <div className="max-w-md w-full px-4 py-3 bg-white text-center rounded-lg">
          <h1 className="mb-4 uppercase text-2xl text-primary font-bold">
            Signup
          </h1>

          <div className="w-full space-y-3">
            <input
              onChange={(e) => {
                data_update_handle("username", e.target.value);
              }}
              placeholder="Enter User Name"
              className=" border-2  hover:outline-secondary px-2 py-3 w-full outline-gray-500 rounded-lg"
            />
            <input
              onChange={(e) => {
                data_update_handle("email", e.target.value);
              }}
              placeholder="Enter Email"
              className=" border-2  hover:outline-secondary px-2 py-3 w-full outline-gray-500 rounded-lg"
            />
            <input
              onChange={(e) => {
                data_update_handle("country", e.target.value);
              }}
              placeholder="Enter Country"
              className=" border-2  hover:outline-secondary px-2 py-3 w-full outline-gray-500 rounded-lg"
            />

            <button
              onClick={show_data_handle}
              className="w-full py-3 bg-primary text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
