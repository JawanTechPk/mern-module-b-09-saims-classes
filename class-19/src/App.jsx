import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { convert_to_dark, convert_to_light, theme_toggle_dynamic, theme_toggle_using_payload } from "./store/slices/theme_slice";

const App = () => {
  const state_value = useSelector((zakarya) => {
    return zakarya.theme;
  });

  const dispatch = useDispatch();

  const bg_color = state_value.theme_mode === "dark" ? "bg-black" : "bg-white";

  // convert theme to dark -----
  const convert_to_dark_handle = () => {
    dispatch(convert_to_dark());
  };

  // convert theme to light ----
  const convert_to_light_handle = () => {
    dispatch(convert_to_light());
  };

  // dynamic theme toggle ----
  const theme_toggle_handle_dynamic = () => {
    dispatch(theme_toggle_dynamic())
  }


 // changing theme by passing payload
  const theme_toggle_payload_handle = () => {
    dispatch(theme_toggle_using_payload('light'))
  }


  // function default parameters
  const example_func = (state = { name: 'aasaads' }, para) => {



  }


  example_func()

  //   console.log(state_value);


  return (
    <div className={` ${bg_color} h-[100dvh]`}>

      {/* App JS File */}
      <Button onClick={convert_to_dark_handle}>Convert To dark</Button>

      <Button onClick={convert_to_light_handle}>Convert To Light</Button>

      <Button onClick={theme_toggle_handle_dynamic}>Dynmic theme Toggle : {state_value.theme_mode}</Button>
      
      <Button onClick={theme_toggle_payload_handle}>Theme Toggle using Payload</Button>
    </div>
  );
};

export default App;
