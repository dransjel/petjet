import styled from 'styled-components';
import { colors } from '../styles/colors';
import LogoBottom from '../assets/icons/logo_bottom.svg';
import YoutubeIcon from '../assets/icons/youtube.svg';
import FacebookIcon from '../assets/icons/facebook.svg';
import TwitterIcon from '../assets/icons/x-logo.svg';
import InstagramIcon from '../assets/icons/instagram.svg';
import LinkedInIcon from '../assets/icons/linkedin.svg';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 100px;
  background: linear-gradient(0deg, #FDF3E6 0%, #FDF3E6 100%), 
              linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 14%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 294px;

  @media (max-width: 768px) {
    padding: 80px 0 40px;
    flex-direction: column;
    gap: 40px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

const NavLink = styled.a`
  color: black;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
`;

const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    order: -1; // Move to top on mobile
  }
`;

const Logo = styled.img`
  width: 190px;
  height: 66px;
`;

const Copyright = styled.p`
  color: #5F5F5F;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.60px;
  word-wrap: break-word;
  text-align: center;
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 24px;
  }
`;

const SocialIcon = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <NavLinks>
        <NavLink href="/faq">FAQ's</NavLink>
        <NavLink href="/contact">Contact Us</NavLink>
      </NavLinks>

      <CenterContent>
        <Logo src={LogoBottom} alt="Pet Jet Express" />
        <Copyright>Petjetexpress@2025. All rights reserved.</Copyright>
      </CenterContent>

      <SocialLinks>
        <SocialIcon src={YoutubeIcon} alt="YouTube" />
        <SocialIcon src={FacebookIcon} alt="Facebook" />
        <SocialIcon src={TwitterIcon} alt="Twitter" />
        <SocialIcon src={InstagramIcon} alt="Instagram" />
        <SocialIcon src={LinkedInIcon} alt="LinkedIn" />
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer; 