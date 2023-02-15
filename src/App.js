import {Route, Routes} from "react-router-dom"
import Header from "./components/HeaderFooter/Header.js"
import Terms from "./components/HeaderFooter/Terms.js";
import Cookies from "./components/HeaderFooter/Cookies.js";
import Contact from "./components/Home/Contact";
import Program from "./components/Home/Program";
import Home from "./components/Home/Home";
import Menu from "./components/Home/Menu.js";

function App() {
  return (
    <div>
   <Header/>
   <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/acasa" exact element={<Home/>}/>
        <Route path="/contact" exact element={<Contact/>}/>
        <Route path="/termenisiconditii" exact element={<Terms/>}/>
        <Route path="/cookies" exact element={<Cookies/>}/>
        <Route path="/program" exact element={<Program/>}/>
        <Route path="/meniu" exact element={<Menu/>}/>
   </Routes>
    </div>
  );
}

export default App;
