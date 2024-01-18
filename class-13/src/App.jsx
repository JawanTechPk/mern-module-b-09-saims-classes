import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";
import { Router_App } from "./config/Router_App";

function App() {
  return (
    <>
      {/* <div className='space-y-12'>
      <Navbar />
      <Products />
    </div> */}

      <Router_App />
    </>
  );
}

export default App;
