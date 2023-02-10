import classes from "./Header.module.css"
function Footer () {
    return (
        <div className={classes.footer}>
        <p>©2020 - Toate Drepturile Rezervate S.C. Book Coffeeshop S.R.L.</p>
        <a href="/contact" className={classes.linkFooter}>Contact | </a>
        <a href="/termenisiconditii" className={classes.linkFooter}>Termeni și condiții | </a>
        <a>Politica Cookies | </a>
        <a>ANPC | </a>
        <a>S.O.L. </a>
    </div>
    )
}

export default Footer;