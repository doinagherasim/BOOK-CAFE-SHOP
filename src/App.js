import {Route, Routes} from "react-router-dom"
import Header from "./components/Header/Header"
import Contact from "./components/Home/Contact";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
   <Header/>
   <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/acasa" exact element={<Home/>}/>
        <Route path="/contact" exact element={<Contact/>}/>
   </Routes>
    </div>
  );
}

export default App;
