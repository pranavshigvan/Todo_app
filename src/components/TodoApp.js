import React from 'react'
let style = {
    maxWidth:"450px",
    width:"100%",
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