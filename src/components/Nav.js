import React,{useContext} from 'react'
import themeContext from '../context/themeContext'
import moon from "../assets/images/icon-moon.svg"
import sun from "../assets/images/icon-sun.svg";
import classes from "./Nav.module.css"

function Nav() {
  let [theme,setTheme]=useContext(themeContext)
  return (
    <nav className={classes.nav}>
        <h1>TODO</h1>
        <img src={theme==="light"?moon:sun} alt="" onClick={()=>{setTheme(prev=>prev==="light"?"dark":"light")}}/>
    </nav>
  )
}

export default Nav