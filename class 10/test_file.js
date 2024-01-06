import React, { useState } from "react";
import "./App.css";

// const App = () => {
//   // const [is_true, setIs_true] = useState(true)
//   const [show_details, setShow_details] = useState(false);
//   const [current_card_data, setcurrent_card_data] = useState({
//     title: "w/IPhone Pro Max 15",
//     price: 1290,
//     description: "qweqw qwe qweqw qweqw. we we we we qwe we e e we e qw",
//   });

//   // const change_state_handle = () => {
//   //   const new_state = is_true ? false : true;
//   //   // setIs_true(!is_true);
//   //   setIs_true(new_state);
//   // };

//   const show_details_handle = () => {
//     setShow_details(true);
//   };

//   return (
//     // <div>
//     //   {is_true ? (
//     //     <h1 className="text-center">State is true</h1>
//     //   ) : (
//     //     <h1 className="text-center">State is false</h1>
//     //   )}

//     //   <button className="bg-slate-600 text-white" onClick={change_state_handle}>
//     //     Change State Button
//     //   </button>
//     // </div>

//     <div>
//       {show_details ? (
//         <div className="max-w-sm w-full bg-lime-600 ">
//           <h1>Title: {current_card_data.title}</h1>
//           <h1>Desc: {current_card_data.description}</h1>
//           <h1>Price: {current_card_data.price}</h1>
//         </div>
//       ) : (
//         <div>

//         </div>
//       )}

//       <button className="mt-14" onClick={show_details_handle}>
//         Show Details
//       </button>
//     </div>
//   );
// };

export const App = () => {
  return <Product_Card />;
};

export default App;
