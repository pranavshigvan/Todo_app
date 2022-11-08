import React,{useContext} from 'react'
import themeContext from '../context/themeContext'
import todosContext from '../context/todosContext'
import classes from "./Option.module.css"
function Option(props) {
    let [theme]=useContext(themeContext)
    let [todos,dispatchTodos]=useContext(todosContext)
    let filter = props.filter
  return (
    <div className={classes.option} style={{backgroundColor:theme==="light"?"white":"hsl(235, 24%, 19%)"}}>
        <p style={{color:theme==="light"?"hsl(236, 9%, 61%)":"hsl(234, 11%, 52%)"}}>{todos.length} items left</p>
        <div className={classes.filter} style={{backgroundColor:theme==="light"?"white":"hsl(235, 24%, 19%)",boxShadow:window.innerWidth<450&&(theme==="light"?"rgba(149, 157, 165, 0.2) 0px 8px 24px":"0px 6px 10px 0px hsla(0,0%,0%,0.14)")}}>
            <button style={{color:filter==="all"?"blue":theme==="light"?"hsl(236, 9%, 61%)":"hsl(234, 11%, 52%)"}} onClick={()=>props.setFilter("all")}>All</button>
            <button style={{color:filter==="active"?"blue":theme==="light"?"hsl(236, 9%, 61%)":"hsl(234, 11%, 52%)"}} onClick={()=>props.setFilter("active")}>Active</button>
            <button style={{color:filter==="completed"?"blue":theme==="light"?"hsl(236, 9%, 61%)":"hsl(234, 11%, 52%)"}} onClick={()=>props.setFilter("completed")}>Completed</button>
        </div>
        <button style={{color:theme==="light"?"hsl(236, 9%, 61%)":"hsl(234, 11%, 52%)"}} onClick={()=>{dispatchTodos({type:"DELETE_ALL"})}}>Clear Completed</button>
    </div>
  )
}

export default Option