import React ,{useState}from "react";

const themeContext = React.createContext(["",()=>{}])

export let ThemeProvider = (props)=>{
    let [theme,setTheme] = useState("light")
    return (
        <themeContext.Provider value={[theme,setTheme]}>
            {props.children}
        </themeContext.Provider>
    )
}
export default themeContext;