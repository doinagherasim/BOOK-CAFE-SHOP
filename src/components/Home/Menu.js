import Footer from "../HeaderFooter/Footer";
import classes from "./Home.module.css"
import menu1 from "../../assets/menu1.png"

function Menu () {
    return (
        <div className={classes.menuWrap}>
            <div width="50%">
            <p className={`${classes.title} ${classes.contactTitle}`}>MENIU</p>
            <pre>
                WE 
                BREW
                SPECIALITY
                COFFEE 
                FROM 
                ORIGO
            </pre>
            <div className={classes.menuImgWrap}>
            <img src={menu1} alt="menu1" className={classes.menuImg}></img>
            </div>
            </div>
            
            <Footer/>
        </div>
    )
};

export default Menu;