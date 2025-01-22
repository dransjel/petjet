import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { devices } from '../styles/breakpoints';
import logo from '../assets/images/logo.svg';
import menuIcon from '../assets/icons/menu.svg';

const NavContainer = styled.nav`
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
  background: ${props => props.$isBookingPage ? '#094454' : 'transparent'};

  ${devices.mobile} {
    padding: 0 20px;
    height: 80px;
  }
`;

const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  ${devices.mobile} {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 45px;
  color: white;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;

const BookNowButton = styled.button`
  background: rgb(239, 103, 74);
  color: white;
  padding: 16px 28px;
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
  cursor: pointer;
`;

const Logo = styled.img`
  height: 54px;

  ${devices.mobile} {
    height: 40px;
  }
`;

const MobileNav = styled.div`
  display: none;
  
  ${devices.mobile} {
    display: flex;
    align-items: center;
    margin-left: 20px;
    position: relative;
    width: auto;
  }
`;

const MenuIcon = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  
  img {
    width: 24px;
    height: 24px;
    filter: brightness(0) invert(1);
  }
`;

const MobileMenu = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 72px;
  left: 0;
  right: 0;
  background: rgb(0, 37, 46);
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  z-index: 1000;
  width: 100vw;
  max-width: 100%;
  box-sizing: border-box;

  span {
    color: white;
    font-size: 16px;
    font-weight: 500;
  }

  ${BookNowButton} {
    width: 100%;
    margin-top: 10px;
  }
`;

const DesktopBookNow = styled(BookNowButton)`
  ${devices.mobile} {
    display: none;
  }
`;

const Navbar = ({ isBookingPage = false }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleLogoClick = () => {
    navigate('/');
  };

  const handleBookNow = () => {
    navigate('/booking');
    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <NavContainer $isBookingPage={isBookingPage}>
      <LogoContainer onClick={handleLogoClick}>
        <Logo src={logo} alt="Pet Jet Express" />
      </LogoContainer>

      <DesktopNav>
        <NavLinks>
          <span>FAQs</span>
          <span>Contact Us</span>
        </NavLinks>
      </DesktopNav>

      <DesktopBookNow onClick={handleBookNow}>Book Now</DesktopBookNow>

      <MobileNav>
        <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img src={menuIcon} alt="Menu" />
        </MenuIcon>
        <MobileMenu $isOpen={isMenuOpen}>
          <span>FAQs</span>
          <span>Contact Us</span>
          <BookNowButton onClick={handleBookNow}>Book Now</BookNowButton>
        </MobileMenu>
      </MobileNav>
    </NavContainer>
  );
};

export default Navbar;