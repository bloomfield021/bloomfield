import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import Aboutus from './components/pages/Aboutus';
import Contactus from './components/pages/Contactus';
import Whatsapp from './components/whatsapp';
import Services1 from './components/Services1';
import ClientAccess from './components/Clientaccess';
import Navigation from './components/Navigation';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
    
      <Whatsapp />
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutus />} />
         <Route path="/contact" element={<Contactus />} />
         <Route path="/services" element={<Services1 />} />
          <Route path="/login" element={<ClientAccess />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
