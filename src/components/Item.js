import React,{useContext,useState} from 'react'
import classes from "./Item.module.css"  
import themeContext from '../context/themeContext'
import todosContext from '../context/todosContext'
import check from "../assets/images/icon-check.svg"
function Item(props) {
  let [theme]=useContext(themeContext)
  let [todos,setTodos]=useContext(todosContext)
  let [isActive,setIsActive]=useState(props.isActive)
  let toggleRadioButton = (e)=>{
    setIsActive(prev=>{
      return !prev
    })
    setTodos(prev=>{
      return prev.map(item=>{
        if (item.id===props.id) {
          return {...item,isActive:!item.isActive}
        }
        return item
      })
    })
    
  }
  return (
    <li className={classes.item} style={{backgroundColor:theme==="light"?"white":"hsl(235, 24%, 19%)",borderBottomColor:theme==="light"?"hsl(233, 11%, 84%)":"hsl(233, 14%, 35%)"}}>
        <div className={classes.container}>
          <div htmlFor="input" className={classes.label} style={{backgroundColor:theme==="light"?"hsl(233, 11%, 84%)":"hsl(233, 14%, 35%)",backgroundImage:!isActive?"linear-gradient(135deg,hsl(192, 100%, 67%),hsl(280, 87%, 65%))":""}} onClick={toggleRadioButton}>
            {isActive&&<div   className={classes.input}  id="input"  style={{backgroundColor:theme==="light"?"white":"hsl(235, 24%, 19%)"}}></div>}
            {!isActive&&<img src={check} alt="" />}
          </div>
          <p style={{color:theme==="light"?"hsl(235, 19%, 35%)":"hsl(236, 33%, 92%)"}}>{props.title}</p>  
        </div>
        <button style={{color:theme==="light"?"hsl(233, 14%, 35%)":"hsl(233, 11%, 84%)"}} onClick={()=>{setTodos(prev=>prev.filter(item=>item.id!==props.id))}}>X</button>
    </li>
  )
}

export default Item;