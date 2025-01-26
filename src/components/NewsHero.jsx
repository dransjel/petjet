import React from 'react';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints';
import { useNavigate } from 'react-router-dom';
import newsDog from '../assets/images/News_dog.png';
import heroMobile from '../assets/images/mobile_News_Dog.png';

const HeroFrame = styled.div`
  width: 100%;
  height: 800px;
  background: #9ED0DF;
  position: relative;
  overflow: hidden;
  margin-bottom: -800px;
  

  ${devices.mobile} {
    height: 10vh;
    margin-bottom: 0;
  }
`;

const HeroBanner = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 40%;
  height: 100%;
  background-image: url(${props => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  border-radius: 24px 0 0 24px;
  margin-right: -1px;

  ${devices.mobile} {
    display: none;
  }
`;

const SectionText = styled.div`
  position: absolute;
  left: 100px;
  top: 273px;
  width: 515px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  z-index: 2;

  ${devices.mobile} {
    position: static;
    width: 100%;
    padding: 0 20px;
    text-align: center;
    align-items: center;
    margin-top: 120px;
    box-sizing: border-box;
  }
`;

const TextFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MainHeadline = styled.h1`
  color: rgb(0, 37, 46);
  font-family: 'Lato', sans-serif;
  font-size: 48px;
  line-height: 58px;
  font-weight: 900;
  margin: 0;

  ${devices.mobile} {
    font-size: 36px;
    line-height: 43px;
  }
`;

const Paragraph = styled.p`
  color: rgb(33, 39, 42);
  font-size: 18px;
  line-height: 27px;
  margin: 0;
  max-width: 515px;
  white-space: pre-line;

  ${devices.mobile} {
    font-size: 16px;
    line-height: 24px;
    max-width: 335px;
  }
`;

const NewsHeroImage = styled.div`
  display: none;
  
  ${devices.mobile} {
    display: block;
    width: 100%;
    max-width: 382px;
    height: 3px;
    margin: 0 auto;
    background-image: url(${heroMobile});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 10px;
  }
`;

const CallbackButton = styled.button`
  width: fit-content;
  height: 54px;
  background: rgb(239, 103, 74);
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 16px 28px;
`;

const NewsHero = () => {
  const navigate = useNavigate();
  
  const handleCallbackClick = () => {
    navigate('/contact');
  };

  return (
    <HeroFrame>
      <SectionText>
        <TextFrame>
          <MainHeadline></MainHeadline>
          <Paragraph>
 
          </Paragraph>
        </TextFrame>
      </SectionText>
    </HeroFrame>
  );
};

export default NewsHero; 