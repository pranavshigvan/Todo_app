import React,{useContext,useState} from 'react'
import classes from "./Input.module.css"
import themeContext from '../context/themeContext'
import todosContext from '../context/todosContext'

function Input() {
  let [inputState,setInputState]=useState("")
  let [theme]=useContext(themeContext)
  let [todos,dispatchTodos]=useContext(todosContext)
  let handleChange = (e)=>{ 
    setInputState(e.target.value)
  }
  window.onkeypress = (e)=>{
    if(e.key==="Enter" && inputState!==""){
      dispatchTodos({type:"ADD",payload:inputState})
      setInputState("")
    }
  }
  return (
    <>
    <div className={classes.input} style={{backgroundColor:theme==="light"?"white":"hsl(235, 24%, 19%)"}}>
      <label htmlFor="" style={{border:theme==="light"?"1px solid hsl(236, 9%, 61%)":"1px solid hsl(234, 11%, 52%)"}}>
        <input type="radio" className='' style={{display:"none"}}  />
      </label>
      <input type="text" placeholder='Create new todo...' className={classes.text} value={inputState}
      onChange={handleChange} style={{color:theme==="light"?"hsl(235, 19%, 35%)":"hsl(236, 33%, 92%)"}}/>
    </div>
    <p className={classes.output}>{inputState}</p>
    </>
    
  )
}

export default Input