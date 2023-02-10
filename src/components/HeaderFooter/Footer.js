import classes from "./Header.module.css"
function Footer () {
    return (
        <div className={classes.footer}>
        <p>©2020 - Toate Drepturile Rezervate S.C. Book Coffeeshop S.R.L.</p>
        <a href="/contact" className={classes.linkFooter} target="_blank">Contact | </a>
        <a href="/termenisiconditii" className={classes.linkFooter} target="_blank">Termeni și condiții | </a>
        <a href="/cookies" className={classes.linkFooter} target="_blank">Politica Cookies | </a>
        <a href="https://anpc.ro/" className={classes.linkFooter} target="_blank" rel="noreferrer">ANPC | </a>
        <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO" className={classes.linkFooter} target="_blank" rel="noreferrer">S.O.L. </a>
    </div>
    )
}

export default Footer;