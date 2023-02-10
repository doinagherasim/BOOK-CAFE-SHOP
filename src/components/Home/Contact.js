import classes from "./Home.module.css"
import mapsbook from "../../assets/mapsbook.png"

function Contact(){
    return (
        <div className={classes.contact}>
          <div width="50%">
            <p className={`${classes.title} ${classes.contactTitle}`}>CONTACT</p>
            </div>
            <div className={classes.rightside}>
              <p className={classes.simpleText}>We brew speciality coffee for #oamenifaini</p>
              <p className={`${classes.title}`} style={{marginBottom: 2, marginTop: 70}}>ADRESS</p>
              <p className={classes.simpleText} style={{marginBottom: 1, marginTop: 1}}>Strada Sf. Ioan, Nr.  24, Brașov</p>
              <p className={classes.simpleText } style={{marginTop: 0}}>Romania</p>
              <p className={`${classes.title} ${classes.address}`}>GOOGLE MAPS</p>
              <a href="https://www.google.com/maps/dir/45.6134999,25.6530238/Book+Coffee+Shop,+Strada+Sf%C3%A2ntul+Ioan+24,+Bra%C8%99ov+500030/@45.633913,25.6054118,14z/data=!3m1!4b1!4m17!1m6!3m5!1s0x40b35b5998bc4641:0xe286709dd945e5fb!2sBook+Coffee+Shop!8m2!3d45.6439091!4d25.5921023!4m9!1m1!4e1!1m5!1m1!1s0x40b35b5998bc4641:0xe286709dd945e5fb!2m2!1d25.5921023!2d45.6439091!3e0" className={classes.imgLink} target="_blank" rel="noreferrer">
                <img src={mapsbook} alt="mapsbook" className={classes.mapImg}/>
                </a>
              <p className={classes.title} style={{marginTop: 30}}>CONTACT/ REZERVARE</p>
              <p className={classes.simpleText } style={{marginTop: 0, marginBottom: 0}}>0722 66 08 08</p>    
              <p className={classes.simpleText } style={{marginTop: 0}}>shop@bookcoffee.ro</p> 
              <p className={classes.title} style={{marginTop: 30}}>PROGRAM</p>
              <p className={classes.simpleText } style={{marginTop: 0, marginBottom: 0}}>LUNI- JOI: 11 - 18</p>    
              <p className={classes.simpleText } style={{marginTop: 0, marginBottom: 0}}>VINERI: 11 - 19</p>
              <p className={classes.simpleText } style={{marginTop: 0, marginBottom: 0}}>SÂMBĂTĂ: 10 - 19</p>
              <p className={classes.simpleText } style={{marginTop: 0, marginBottom: 0}}>DUMINICĂ: 10 - 18</p>
              <p className={classes.title} style={{marginTop: 30}}>URMĂREȘTE-NE ȘI PE </p>
              <a className={`${classes.simpleText} ${classes.simpleLink}`} href="https://www.facebook.com/bookcoffee.ro" target="_blank" rel="noreferrer" >Facebook</a>
              <a className={`${classes.simpleText} ${classes.simpleLink}`} href="https://www.instagram.com/book.coffeeshop/" target="_blank" rel="noreferrer">Instagram</a>
              <p className={classes.title} style={{marginTop: 30}}>RETUR PRODUSE</p>
              <p className={classes.simpleText } style={{marginTop: 0, marginBottom: 0}}>email: shop@bookcoffee si telefon: 0722 66 08 08</p>
              <p className={classes.simpleText } style={{marginTop: 0, marginBottom: 0}}>După ce primim cererea ta de retur vom reveni cu informații despre pașii următori din procesul de retur.</p>
              <p className={classes.title} style={{marginTop: 30}}>COMPANIE</p>
              <p className={classes.simpleText } style={{marginTop: 0, marginBottom: 0}}>Book Coffeeshop S.R.L.</p>
              <p className={classes.simpleText } style={{marginTop: 0, marginBottom: 0}}>Adresa: Strada Sf. Ioan, Nr.  24, Brașov</p>
              <p className={classes.simpleText } style={{marginTop: 0, marginBottom: 0}}>CUI: CUI 41099816</p>
              <p className={classes.simpleText } style={{marginTop: 0, marginBottom: 0}}>Registrul Comertului: J08/1669/13.05.2019</p>
              <p className={classes.simpleText } style={{marginTop: 0, marginBottom: 0}}>T*: 0722 66 08 08</p>
              <p className={classes.simpleText } style={{marginTop: 5, marginBottom: 100, fontStyle: "italic"}}>*linie telefonica cu tarif normal</p>
              <p className={classes.simpleText } style={{marginTop: 5, marginBottom: 100}}>©2020 - Toate Drepturile Rezervate S.C. Book Coffeeshop S.R.L.</p>
            </div>
            
        </div>
    )
}

export default Contact;