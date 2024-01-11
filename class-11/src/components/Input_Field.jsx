import React from "react";

const Input_Field = (props) => {
  return (
    <div>
      <input
        id={props.id}
        placeholder={props.placeholder}
        type={props.type}
        onChange={(e) => {
          props.onChangeHandle(e.target.value, props.id);
        }}
      />
    </div>
  );
};

export { Input_Field };
