import classes from "./Home.module.css"
function Contact(){
    return (
        <div className={classes.contact}>
            <p className={classes.contactTitle}>CONTACT</p>
            <div className={classes.rightside}>
            <p className={classes.quote}>we brew speciality coffee for #oamenifaini</p>
            <p className={classes.address}>ADRESS</p>
            <p className={classes.address2}>Strada Sf. Ioan, Nr.  24, Brașov</p>
            </div>
        </div>
    )
}

export default Contact;