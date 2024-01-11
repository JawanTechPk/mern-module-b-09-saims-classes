import React, { useState } from "react";
import "./App.css";
import { Parent_Component } from "./components/Parent_Component";
import { Signup_Form } from "./components/Signup_Form";
import { Map_Example_Component } from "./components/Map_Example_Component";

const App = () => {
  // return <Parent_Component />;
  // return <Signup_Form />;

  return (
    <>
      <Map_Example_Component />
    </>
  );
};

export default App;
