import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
