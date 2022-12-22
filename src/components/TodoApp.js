import React from 'react'
let style = {
    maxWidth:"450px",
    width:"100%",
    border:"1px solid red",
    margin:"0 auto"
}
function TodoApp(props) {
   return (
    <main style={style}>
        {props.children}
    </main> 
  )
}

export default TodoApp 