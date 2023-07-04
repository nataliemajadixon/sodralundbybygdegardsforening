
import './App.css';
import Navbars from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import History from './components/History/History';
import Contact from './components/Contact/Contact';
import Tractor from './components/Tractor/Tractor';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbars />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/history' element={<History />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/tractorrace' element={<Tractor />} />

    
    </Routes>
    </>
  );
}

export default App;
