import './App.css';
import { Route,Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <nav>
        <Link style={{color:'white', textDecorationLine:'none', margin:'2.5vh'}} to="/">KALVIUM❤️</Link>
        <div>
        <Link style={{color:'white', textDecorationLine:'none'}} className='About' to="/About">About Us</Link>
        <Link style={{color:'white', textDecorationLine:'none'}} className='About' to="/Contact">Contact</Link>
        </div>
      </nav>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
