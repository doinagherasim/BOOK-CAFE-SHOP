import { useState } from "react"
import classes from "./Header.module.css"
import bookcafe from "../../assets/bookcafe.png"
import menu from "../../assets/menu.png"

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
      <a href="/home"><img src={bookcafe} className={classes.bookImg} alt="bookcafe"/></a>
      <div className={classes.menuWrap}>
         <img className={classes.menuImg} src={menu} alt="menu" onClick={showMenu}/>
      </div>
         <a href="/contact" style={{textDecoration:"none"}} className={classes.reservation}>RESERVATION</a>         
      <div className={`${menuList ? classes.menuList : classes.hidden}`}>
         menu list
         <button onClick={closeMenu}>x</button>
         <a href="/home">Home</a>
         <a href="/reservation">Reservation</a>
         <a href="/restaurant">Restaurant</a>
         <a href="/reviews">Reviews</a>
         <a href="/contact">Contact</a>
      </div>
   </div>
   )
};

export default Header;