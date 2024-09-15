import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './pages/Home/Home';
import { Collars } from './pages/Collars/Collars';
import { Leashes } from './pages/Leashes/Leashes';
import { Cart } from './pages/Cart/Cart';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/leashes' element={<Leashes />} />
          <Route path='/collars' element={<Collars />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
