import React from "react";
import { LuHome, LuArrowLeft } from "react-icons/lu";
import { IoMdLogOut } from "react-icons/io";

export const React_Icons_Examples = () => {
  return (
    <>
      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
          molestiae animi veniam eos labore! Impedit totam quia enim.
          Exercitationem ratione at corporis eligendi libero nesciunt explicabo
          eaque error dolorum assumenda.
          <LuHome size={40} color="red" />
        </p>
      </div>

      <LuArrowLeft />

      <IoMdLogOut size={50} />
    </>
  );
};
