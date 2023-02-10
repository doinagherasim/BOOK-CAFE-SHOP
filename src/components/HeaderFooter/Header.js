import { useState } from "react"
import classes from "./Header.module.css"
import bookcafe from "../../assets/bookcafe.png"
import menu from "../../assets/menu.png"
import coffeeMenu from "../../assets/coffeeMenu.png"
import facebook from "../../assets/facebook.png"
import insta from "../../assets/insta.png"

function Header (){

   const [menuList, setMenuList]=useState(false);
   const showMenu=()=> {
      setMenuList(true);
   }
   const closeMenu=()=>{
      setMenuList(false)
   }

   return (
   <div className={classes.headerWrap}>
      <a href="/acasa"><img src={bookcafe} className={classes.bookImg} alt="bookcafe"/></a>
      <div className={classes.menuWrap}>
         <img className={classes.menuImg} src={menu} alt="menu" onClick={showMenu}/>
      </div>
         <a href="/contact" style={{textDecoration:"none"}} className={classes.reservation}>REZERVĂRI</a>         
      <div className={`${menuList ? classes.menuList : classes.hidden}`}>
         <img src={coffeeMenu} alt="coffeeMenu" className={classes.caffeeMenu}></img>
         <div className={classes.list}>
            <button onClick={closeMenu} className={classes.xBtn}>x</button>
            <a href="/acasa" className={classes.menuLink} style={{marginTop:80}}>ACASĂ</a>
            <a href="/rezervari" className={classes.menuLink}>REZERVĂRI</a>
            <a href="/program" className={classes.menuLink}>Program</a>
            <a href="/restaurant" className={classes.menuLink}>Restaurant</a>
            <a href="/recenzii" className={classes.menuLink}>RECENZII</a>
            <a href="/poeZIUA" className={classes.menuLink}>POEziua</a>
            <a href="/contact" className={classes.menuLink}>Contact</a>
            <div className={classes.menuLink}>
            <p className={classes.findUs}>ne găsiți si aici:</p>
            <a href="https://www.facebook.com/bookcoffee.ro" target="_blank" rel="noreferrer" ><img src={facebook} alt="facebook" width="30"></img></a>
            <a href="https://www.instagram.com/book.coffeeshop/" target="_blank" rel="noreferrer"><img src={insta} alt="insta" width="20" style={{marginBottom:4}}></img></a>
            <a href="https://www.google.com/maps/dir/45.6136617,25.6525665/Strada+Sf%C3%A2ntul+Ioan+24,+Bra%C8%99ov+500030/@45.6339599,25.5870932,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x40b35b7bca15b9db:0x15267740b367babc!2m2!1d25.5920249!2d45.6438272" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
               <p className={classes.contact}>strada Sfântul Ioan 24, Brașov</p>
            </a>
            <p className={classes.contact}>T*: 0722 66 08 08</p>
            <a href="mailto:shop@bookcoffee" style={{textDecoration: "none"}}>
            <p className={classes.contact}>email: shop@bookcoffee </p>
            </a>
            <p className={classes.contact}>bookcoffee.ro</p>
            </div>
         </div>
      </div>
   </div>
   )
};

export default Header;