import "./App.css";
import {
  First_Component,
  Another_Component,
} from "./components/First_Component";
import { Second_Component } from "./components/Second_Component";

const App = () => {
  const name = "Anas";

  return (
    <div style={{ fontSize: "60px" }}>
      <h1>{name}</h1>
      <First_Component />
      <Second_Component />
      <Another_Component />
    </div>
  );
};

export default App;
