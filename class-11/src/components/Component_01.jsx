import React from "react";

const Component_01 = (props) => {
  // const update_props_handle = () => {
  //   props.value_update_handle("updated label value");
  // };

  const click_handle = () => {
    props.value_update_handle(10);
  };

  return (
    <>
      <div>{props.label}</div>
      {/* <button onClick={click_handle}>
        Update Value
      </button> */}
      <button onClick={() => props.value_update_handle(20)}>
        Update Value
      </button>
    </>
  );
};

export { Component_01 };
