import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FAQPage from './pages/FAQPage';
import { GlobalStyles } from './styles/GlobalStyles';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/booking" element={<div>Booking Page Coming Soon</div>} />
          {/* Contact route will be added later */}
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;