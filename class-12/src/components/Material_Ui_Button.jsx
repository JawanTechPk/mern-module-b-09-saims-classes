import { Button } from "@mui/material";
import React from "react";

export const Material_Ui_Button = () => {
  return (
    <>
      {/* <React_Icons_Examples /> */}
      <Button
        sx={{ textTransform: "none", color: "green" }}
        onClick={() => console.log("clicked")}
        variant="outlined"
      >
        Sign up
      </Button>
    </>
  );
};
