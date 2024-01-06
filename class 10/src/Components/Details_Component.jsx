import React from "react";

export const Details_Component = (props) => {
  return (
    <div>
      <img className="max-w-sm" src={props.image_url} />
      <h1>Title: {props.title}</h1>
      <h1>Price: {props.price}</h1>

      <p>{props.description}</p>

      <button onClick={props.go_back_handle}>Go back</button>
    </div>
  );
};
