import {Route, Routes} from "react-router-dom"
import Header from "./components/HeaderFooter/Header.js"
import Terms from "./components/HeaderFooter/Terms.js";
import Cookies from "./components/HeaderFooter/Cookies.js";
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
        <Route path="/termenisiconditii" exact element={<Terms/>}/>
        <Route path="/cookies" exact element={<Cookies/>}/>
   </Routes>
    </div>
  );
}

export default App;
