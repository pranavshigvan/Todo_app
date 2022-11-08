import React from 'react'
let style = {
    maxWidth:"450px",
    margin:"10px auto"
}
function TodoApp(props) {
   return (
    <main style={style}>
        {props.children}
    </main> 
  )
}

export default TodoApp 