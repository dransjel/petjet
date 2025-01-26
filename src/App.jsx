import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FAQPage from './pages/FAQPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import NewsPage from './pages/NewsPage';
import BlogPost from './pages/BlogPost';
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
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:link" element={<BlogPost />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;