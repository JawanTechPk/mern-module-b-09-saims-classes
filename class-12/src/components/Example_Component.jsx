import React from "react";

export const Example_Component = (props) => {
  const { children, data } = props;
  console.log(data);
  return (
    <div>
      <h1>Children goes here...</h1>
      <h1>Name: {data.name}</h1>

      <div>{children}</div>
    </div>
  );
};
