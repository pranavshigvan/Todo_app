import logo from './logo.svg';
import './App.css';
import { useContext ,useState} from 'react';
import themeContext from './context/themeContext';
import lightBgImgDesktop from  "./assets/images/bg-desktop-light.jpg"
import darkBgImgDesktop from "./assets/images/bg-desktop-dark.jpg"
import lightBgImgMobile from "./assets/images/bg-mobile-light.jpg"
import darkBgImgMobile from "./assets/images/bg-mobile-dark.jpg"
import Nav from './components/Nav';
import TodoApp from './components/TodoApp';
import Input from './components/Input';
import Todo from './components/Todo';

function App() {
  let [theme,setTheme]=useContext(themeContext)
  let [innerWidth,setInnerWidth]=useState(window.innerWidth)
  window.onresize=()=>setInnerWidth(window.innerWidth)
  let style ={
    backgroundColor:theme==="light"?"hsl(0, 0%, 98%)":"hsl(235, 21%, 11%)",
    backgroundImage:theme==="light"?innerWidth>750?`url(${lightBgImgDesktop})`:`url(${lightBgImgMobile})`:innerWidth>750?`url(${darkBgImgDesktop})`:`url(${darkBgImgMobile})`,
  }
  return (
      <div className="App" style={style}>
        <TodoApp>
          <Nav />
          <Input />
          <Todo />
        </TodoApp>
      </div>
  );
}

export default App;
