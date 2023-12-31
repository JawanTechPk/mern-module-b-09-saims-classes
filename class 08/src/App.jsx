import { Nav_Component } from "./components/Nav_Component";
import { Hero_Section_Component } from "./components/Hero_Section_Component";
import "./App.css";
import { Signup_Button_Component } from "./components/Signup_Button";

import bg_image from "./assets/bg-image.jpg";
import { Email_input_Component } from "./components/Email_Input";

const App = () => {
  return (
    <>
      <Nav_Component />
      <Hero_Section_Component />

      <Signup_Button_Component />

      <div
        style={{
          backgroundImage: `url(${bg_image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          height: "500px",
        }}
      ></div>

      <Signup_Button_Component label="Signup" />
      <Signup_Button_Component label="Login" />
      <Signup_Button_Component label="Submit" />

      <Email_input_Component
        id="username"
        label="Username"
        placeholder="Enter username"
        type="password"
      />
    </>
  );
};

export default App;
