import styled from 'styled-components';
import { devices } from '../styles/breakpoints';
import { colors } from '../styles/colors';
import heroDogMobile from '../assets/images/hero-dog-mobile.png';
import heroDog from '../assets/images/hero-dog.png';

const Section = styled.section`
  background: ${colors.darkBlue};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;

  ${devices.desktop} {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    padding: 0 80px;
  }
`;

const Content = styled.div`
  color: white;
  max-width: 500px;
  margin-top: 40px;
  order: 1;

  ${devices.desktop} {
    order: 0;
    margin-top: 0;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;

  ${devices.desktop} {
    font-size: 48px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
  
  ${devices.desktop} {
    font-size: 18px;
  }
`;

const BookNowButton = styled.button`
  background: ${colors.coral};
  color: white;
  padding: 16px 32px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 40px;

  ${devices.desktop} {
    margin-bottom: 0;
  }
`;

const HeroImage = styled.div`
  width: 382px;
  height: 340px;
  background-image: url(${heroDogMobile});
  background-size: cover;
  background-position: center;
  order: 2;

  ${devices.desktop} {
    width: 50%;
    height: 100vh;
    background-image: url(${heroDog});
    order: 1;
  }
`;

const HeroSection = () => {
  return (
    <Section>
      <Content>
        <Title>Family Flies Together</Title>
        <Description>
          No cargo holds, no separation — just you and your pet sharing the skies together. 
          Experience personalized travel designed for those who refuse to leave family behind.
        </Description>
        <BookNowButton>Book Now</BookNowButton>
      </Content>
      <HeroImage />
    </Section>
  );
};

export default HeroSection; 