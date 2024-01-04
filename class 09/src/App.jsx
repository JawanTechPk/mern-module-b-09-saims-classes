import React, { useState } from "react";
import "./App.css";
import { Signup_Component } from "./components/Signup_Component";
const App = () => {
  // const [count, setCount] = useState(0);

  // // let count = 0;
  // const handle_login = () => {
  //   // count += 1;
  //   // console.log("count", count);
  //   // let update_count;

  //   // setCount(count + 1);

  //   setCount((current_count) => {
  //     return current_count + 1;
  //   });

  //   // count++
  //   // console.log("login button clicked!");
  // };
  // let is_available = true

  // !!is_available

  // const [show_more, setShow_more] = useState(false);

  // const showMoreHanlde = () => {
  //   const toggle_var = show_more ? false : true;
  //   setShow_more(toggle_var);
  // };

  return (
    <>
      {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since{" "}
      {show_more ? (
        <span>
          the 1500s, when an unknown printer took a galley of type and scrambled
          it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </span>
      ) : null}
      <button onClick={showMoreHanlde} className="text-gray-500">
        Read more...
      </button> */}

      <Signup_Component />
    </>

    // <>
    //   <h1>Count: {count}</h1>
    //   <button onClick={handle_login}>Login</button>
    // </>
  );
};

export default App;
{
  /*  */
}
