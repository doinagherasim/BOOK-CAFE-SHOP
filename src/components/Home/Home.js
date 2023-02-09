import { useRef, useEffect } from "react";

import WelcomeVideo from "../../assets/WelcomeVideo.mp4";
import classes from "./Home.module.css"

function Home(){
    const vidRef=useRef();

useEffect(() => { vidRef.current.play(); },[]);

return (
    <div>
    <div className={classes.home}>         
        <video src={WelcomeVideo} ref={ vidRef } muted autoPlay loop width="100%" />
    </div>
    <div className={classes.footer}>
        <p>©2020 - Toate Drepturile Rezervate S.C. Book Coffeeshop S.R.L.</p>
        <a>Contact | </a>
        <a>Termeni și condiții | </a>
        <a>Politica Cookies | </a>
        <a>ANPC | </a>
        <a>S.O.L. </a>
    </div>
    </div>
)
}

export default Home;