import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import BookingPage from './pages/BookingPage';
import { GlobalStyles } from './styles/GlobalStyles';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;