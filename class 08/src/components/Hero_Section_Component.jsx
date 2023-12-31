import bg_image from "../assets/bg-image.jpg";
import { Email_input_Component } from "./Email_Input";
import { Signup_Button_Component } from "./Signup_Button";

const Hero_Section_Component = () => {
  return (
    <div style={{ position: "relative" }}>
      <img src={bg_image} className="hero-section-main" />

      <div className="hero-section-content">
        <h1>Generate More Leads with a professional landing page!</h1>
        <div className="input-field">
          <Email_input_Component />
          <Signup_Button_Component />
        </div>
      </div>
    </div>
  );
};

export { Hero_Section_Component };
