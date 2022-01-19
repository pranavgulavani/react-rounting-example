import './App.css';
import { NavBar } from './components/Navbar';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/Home.js';
import { About } from './components/About.js'
import { Contact } from './components/Contact';
import { Services } from './components/Services';
import { NotFound } from './components/Notfound';

function App() {
  return (
    <>
      <NavBar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  );
}

export default App;
