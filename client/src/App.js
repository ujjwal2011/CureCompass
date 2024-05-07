import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './component/Navbar/Navbar';
import Select1 from './component/Select1/Select1';
import Footer from './component/Footer';
import Landing from './component/Landing';
import './App.css';
import Contact from './component/Contact/Contact';
import About from './component/About/About';

const App = () => (
  <Router>
    <div className='bg-white min-h-screen'>
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Recommendation" element={<Select1 />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </div>
  </Router>
);

export default App;
