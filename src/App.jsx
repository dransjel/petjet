import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FAQPage from './pages/FAQPage';
import { GlobalStyles } from './styles/GlobalStyles';
import Footer from './components/Footer';
import BookingPage from './pages/BookingPage';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/booking" element={<BookingPage />} />
          {/* Contact route will be added later */}
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;