import React, { useState } from "react";
import { Component_01 } from "./Component_01";

const Parent_Component = () => {
  const [label, setLabel] = useState(1);

  const value_update_handle = (val) => {
    // console.log(val);
    // setLabel(val);
    setLabel(label + val);
    // console.log("function is running", val);
  };
  return (
    <Component_01 value_update_handle={value_update_handle} label={label} />
  );
};

export { Parent_Component };
