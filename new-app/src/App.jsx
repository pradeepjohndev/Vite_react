import './App.css'
import Course from './Course';
import Footer from './Footer';
/* import Navbar from './Navbar'; */
/* import html from './assets/card1.png';
import css from './assets/card2.png';
import js from './assets/card3.png'; 
import List from './List';*/
import Simplecount from './Folder/Simplecount.jsx';
import Style from './Style';
import Typeshow from './Folder/Typeshow';
import WelcomeApp from './Folder/Effect.jsx';
import Timereffect from './Folder/Timereffect.jsx';
import Effect_title from './Folder/Effect_title.jsx';
import Ref from './Folder/Ref.jsx';
import Memo from './Folder/Memo.jsx';
import Callback from './Folder/Callback.jsx';
import UserContext from "./Hooks/UserContext.jsx";
import Profile from "./Hooks/Profile.jsx";
import { useState } from 'react';
import Dashboard from './Hooks/Dashboard.jsx'
import ThemeContext from './Hooks/ThemeContext.jsx';
import Navbar from './Hooks/Navbar.jsx';



function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
     {/* <Navbar />
     <Course />

     <Footer /> */}

     {/* <Course name="HTML" price="100" image={html} rate={5} show={true}/>
     <Course name="CSS" price="200" image={css} show={true}/>
     <Course name="js" price="150" image={js} rate={4} show={true}/> 
     <List />
     <Typeshow />
     <Simplecount />
     <WelcomeApp />
     <Timereffect />
     <Effect_title />
     <Ref />
     <Memo />
     <Callback />
     {/* <Style /> */}
     {/* <UserContext.Provider value={username}>
      <Profile />
    </UserContext.Provider> */}

     <ThemeContext.Provider value={{ theme, setTheme }}>
      <Navbar />
      <Dashboard />
    </ThemeContext.Provider>
    </>
  );
}

export default App
