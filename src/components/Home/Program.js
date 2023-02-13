import Footer from "../HeaderFooter/Footer";
import classes from "./Home.module.css"

function Program () {
    return (
        <div className={classes.programWrap}>
            <div width="50%">
            <p className={`${classes.title} ${classes.contactTitle}`}>PROGRAM</p>
            <p className={classes.simpleText } style={{marginTop: 5, marginBottom: 0, marginLeft: 200}}>LUNI- JOI: 11 - 18</p>    
              <p className={classes.simpleText } style={{marginTop: 5, marginBottom: 0, marginLeft: 200}}>VINERI: 11 - 19</p>
              <p className={classes.simpleText } style={{marginTop: 5, marginBottom: 0, marginLeft: 200}}>SÂMBĂTĂ: 10 - 19</p>
              <p className={classes.simpleText } style={{marginTop: 5, marginBottom: 0, marginLeft: 200}}>DUMINICĂ: 10 - 18</p>
            </div>
            <Footer/>
        </div>
    )
};

export default Program;