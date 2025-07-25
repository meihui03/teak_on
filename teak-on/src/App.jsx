import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact'; 
import Home from './pages/Home';
import Cart from './pages/Cart';
import Furniture from './pages/Furniture';
import About from './pages/About';

function App() {
  return (
    <main className="font-sans w-full">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/furniture" element={<Furniture />} /> 
        <Route path="/about" element={<About />} /> 
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
