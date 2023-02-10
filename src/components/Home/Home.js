import { useRef, useEffect } from "react";

import WelcomeVideo from "../../assets/WelcomeVideo.mp4";
import classes from "./Home.module.css";
import Footer from "../HeaderFooter/Footer"

function Home(){
    const vidRef=useRef();

useEffect(() => { vidRef.current.play(); },[]);

return (
    <div>
    <div className={classes.home}>         
        <video src={WelcomeVideo} ref={ vidRef } muted autoPlay loop width="100%" />
    </div>
    <Footer/>
    </div>
)
}

export default Home;