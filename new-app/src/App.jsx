import './App.css'
import Course from './Course';
import Footer from './Footer';
import Navbar from './Navbar';
/* import html from './assets/card1.png';
import css from './assets/card2.png';
import js from './assets/card3.png'; */
import List from './List';

function App() {
  return (
    <>
     {/* <Navbar />
     <Course />

     <Footer /> */}

     {/* <Course name="HTML" price="100" image={html} rate={5} show={true}/>
     <Course name="CSS" price="200" image={css} show={true}/>
     <Course name="js" price="150" image={js} rate={4} show={true}/> */}
     <List />
    </>
  );
}

export default App
