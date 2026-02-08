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
import ScrollToTop from './components/ScrollToTop'; // Import the new utility
import Scrollup from "./components/scrolluparrow";



import Loans from "./components/Servicespage/loans";
import Seopage from "./components/Servicespage/seopage";
import Marketingpage from "./components/Servicespage/marketingpage";
import Consulting from "./components/Servicespage/consultingpage";
function App() {
  return (
    <Router>
      {/* IMPORTANT: ScrollToTop must be inside Router 
          but outside Routes to work correctly. 
      */}
     
      
      <Whatsapp />
      <Navigation />
      <Scrollup />
       <ScrollToTop /> 
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/services" element={<Services1 />} />
        <Route path="/login" element={<ClientAccess />} />



         <Route path="/loans" element={<Loans />} />
         <Route path="/seopage" element={<Seopage />} />
         <Route path="/marketingpage" element={<Marketingpage />} />
         <Route path="/consultingpage" element={<Consulting />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;