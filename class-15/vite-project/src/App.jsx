import { Route, Routes } from "react-router-dom"
import Input from "./components/Input"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import User from "./pages/User"

function App() {
  
  return (
    <>

    <Routes>
      <Route index element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="*" element={<NotFound />}/>
      <Route path="/user/:username" element={<User />}/>
    </Routes>
    
         {/* <Input faraz="Enter username" type="text" />
         <Input faraz="Enter email" type="email"/>
         <Input faraz="Enter password" type="password"/> */}


        
    </>
  )
}

export default App
