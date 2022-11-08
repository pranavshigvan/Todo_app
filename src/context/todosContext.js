import React,{useReducer} from 'react'

const todosContext = React.createContext([])

let todoReducer = (state,action)=>{
    switch(action.type){
        case "ADD":
            return [...state,{title:action.payload,isActive:true,id:Math.random()}]
        case "IS_ACTIVE":
            return state.map(item=>{
                if(item.id === action.payload.id){
                    return {...item,isActive:action.payload.isActive}
                }
                else{
                    return item
                }
            })
        case "DELETE":
            return state.filter(item=>item.id!==action.payload.id)
        case "DELETE_ALL":
            return state.filter(item=>item.isActive)
        default:
            return state
    }
}
export let TodosProvider = (props)=>{
    let [todos,dispatchTodos]=useReducer(todoReducer,JSON.parse(localStorage.getItem("todos")))
    return(
        <todosContext.Provider value={[todos,dispatchTodos]}>
            {props.children}
        </todosContext.Provider>
    )
}

export default todosContext