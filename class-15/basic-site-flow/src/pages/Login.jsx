import { Button, Container, Stack } from "@mui/material";
import React, { useState } from "react";
import { Input_Component } from "../components/Input_Component";
import { Demo_Component } from "../components/Demo_Component";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user_data, setUserData] = useState({});

  const navigate = useNavigate();

  const onChangeHandle = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    // if(id === 'email'){
    //     setUserData({ ...user_data, email: value });
        
    // }
    // else{
    //     setUserData({ ...user_data, password: value });
        
    // }
    setUserData({ ...user_data, [id]: value });
        
    // console.log("val", e.target.id);
  };

  const submit_handle = (e) => {
    e.prevantDefault()

    console.log("data", user_data);
    navigate("/");
  };
  return (
    <Container>
      <Stack>
        {/* <Demo_Component title={"Login Page"}> */}
        <form 
        onSubmit={submit_handle}
        >
          <Input_Component
            placeholder={"Email address"}
            type={"email"}
            id={"email"}
            required={true}
            onChange={onChangeHandle}
          />
          <Input_Component
            required={true}
            placeholder={"Password"}
            type={"password"}
            id={"password"}
            onChange={onChangeHandle}
          />

          <Button 
          type="submit"
        //   onClick={submit_handle}
          >Submit Details</Button>
        </form>
        {/* </Demo_Component> */}
      </Stack>
    </Container>
  );
};

// named export
export { Login };
