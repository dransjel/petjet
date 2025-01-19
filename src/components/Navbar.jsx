import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.svg';

const Nav = styled.nav`
  width: 100%;
  height: 102px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 36px;
  color: white;
`;

const BookNowButton = styled.button`
  background: rgb(239, 103, 74);
  color: white;
  padding: 16px 41.5px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const Logo = styled.img`
  height: 40px;
`;

const Navbar = () => {
  return (
    <Nav>
      <LogoContainer>
        <Logo src={logo} alt="Pet Jet Express" />
      </LogoContainer>
      <NavLinks>
        <span>FAQs</span>
        <span>Contact Us</span>
      </NavLinks>
      <BookNowButton>Book Now</BookNowButton>
    </Nav>
  );
};

export default Navbar; 