import React,{useContext,useState} from 'react'
import Item from './Item';
import Option from './Option';
import classes from "./Todo.module.css"
import themeContext from '../context/themeContext';
import todosContext from '../context/todosContext'

function Todo() {
  let [theme]=useContext(themeContext)
  let [todos]=useContext(todosContext)
  let [filter,setFilter]=useState("all")
  localStorage.setItem("todos",JSON.stringify(todos))  
  return (
    <div className={classes.todo} style={{boxShadow:theme==="light"?"rgba(149, 157, 165, 0.2) 0px 8px 24px":"0px 6px 10px 0px hsla(0,0%,0%,0.14)"}}>
      <ul style={{backgroundColor:theme==="light"?"white":"hsl(235, 24%, 19%)",borderBottomColor:theme==="light"?"hsl(233, 11%, 84%)":"hsl(233, 14%, 35%)"}}>
        {todos.length>0&&todos.filter((item)=>{
          if(filter==="active"){
            return item.isActive
          }else if(filter==="completed"){
            return !item.isActive
          }else{
            return item
          }
        }).map((item)=>{
          return <Item key={item.id} title={item.title} isActive={item.isActive} id={item.id}/>
        })}
      </ul> 
      <Option setFilter={setFilter} filter={filter}/>
    </div>
  )
}

export default Todo