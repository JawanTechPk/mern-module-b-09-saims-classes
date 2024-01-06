import React from "react";

export const Product_Card = (props) => {
  const set_data_handle = () => {
    props.click_handle(props);
  };
  return (
    <div onClick={set_data_handle} className="flex justify-center max-w-sm ">
      <div className="cursor-pointer hover:scale-y-110 rounded-xl">
        <img className="w-52" src={props.image_url} alt="" />

        <div className="flex flex-col">
          {/* <h1 className="ms-3">Title</h1> */}
          <h1 className="ms-3">{props.title}</h1>
          <h1 className="ms-3">${props.price}</h1>
        </div>
      </div>
    </div>
  );
};
