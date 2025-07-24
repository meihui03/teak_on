import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact'; 
import Home from './pages/Home';

function App() {
  return (
    <main className="font-sans w-full">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
