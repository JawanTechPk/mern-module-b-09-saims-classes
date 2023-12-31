import { Logo_Component } from "./Logo_Component";
import { Signup_Button_Component } from "./Signup_Button";

const Nav_Component = () => {
  return (
    <div className="navbar-main">
      <Logo_Component />
      <Signup_Button_Component />
    </div>
  );
};

export { Nav_Component };
