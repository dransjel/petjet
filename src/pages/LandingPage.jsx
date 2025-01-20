import React from 'react';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints';
import Navbar from '../components/Navbar';
import SearchForm from '../components/SearchForm';
import Layout from '../components/layout/layout';
import DestinationSection from '../components/DestinationSection';
import OurDestinations from '../components/OurDestinations';
import VideoIntro from '../components/VideoIntro';
import ReasonsPetJet from '../components/ReasonsPetJet';
import heroMobile from '../assets/images/hero-dog-mobile.png';

const PageContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  position: relative;
  
  ${devices.mobile} {
    max-width: 100vw;
    overflow-x: hidden;
  }
`;

const HeroFrame = styled.div`
  width: 100%;
  height: 800px;
  background: rgb(9, 68, 84);
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 0;

  ${devices.mobile} {
    height: 93vh;
    width: 100vw;
    max-width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroBanner = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.$backgroundImage});
  background-size: cover;
  background-position: center;

  ${devices.mobile} {
    display: none;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(9, 68, 84, 0);
  }
`;

const MobileHeroImage = styled.div`
  display: none;
  
  ${devices.mobile} {
    display: block;
    width: 100%;
    max-width: 382px;
    height: 340px;
    margin: 0 auto;
    background-image: url(${heroMobile});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 10px;
  }
`;

const SectionText = styled.div`
  position: absolute;
  left: 100px;
  top: 273px;
  width: 515px;
  height: 253px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  z-index: 1;

  ${devices.mobile} {
    position: static;
    width: 100%;
    height: auto;
    padding: 0 20px;
    text-align: center;
    align-items: center;
    margin-top: 40px;
    box-sizing: border-box;
  }
`;

const Caption = styled.div`
  height: 20px;
  color: rgb(0, 29, 108);
`;

const SecondaryHeadline = styled.div`
  height: 97px;
  color: rgb(33, 39, 42);
`;

const TextFrame = styled.div`
  height: 159px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${devices.mobile} {
    height: auto;
    align-items: center;
  }
`;

const MainHeadline = styled.h1`
  height: 58px;
  color: rgb(255, 255, 255);
  font-family: 'Lato', sans-serif;
  font-size: 48px;
  line-height: 58px;
  font-weight: 900;
  margin: 0;
  padding: 0;

  ${devices.mobile} {
    margin-top: 100px;
    font-size: 36px;
    line-height: 43px;
    height: auto;
  }
`;

const Paragraph = styled.p`
  height: 81px;
  color: white;
  font-size: 18px;
  line-height: 27px;

  ${devices.mobile} {
    font-size: 16px;
    line-height: 24px;
    height: auto;
    max-width: 335px;
  }
`;

const BookNowButton = styled.button`
  width: 160px;
  height: 54px;
  background: rgb(239, 103, 74);
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 16px 41.5px;

  ${devices.mobile} {
    margin-top: 20px;
    margin-bottom: 0px;
  }
`;

const SearchSection = styled.section`
  width: 100%;
  padding: 120px;
  background: white;
  min-height: 930px;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 800px;

  ${devices.mobile} {
    padding-top: 0;
  }
`;

const LandingPage = () => {
  return (
    <Layout>
      <PageContainer>
        <HeroFrame>
          <HeroBanner $backgroundImage="/src/assets/images/hero-dog.jpg" />
          <SectionText>
            <TextFrame>
              <MainHeadline>Family Flies Together</MainHeadline>
              <Paragraph>
                No cargo holds, no separation — just you and your pet sharing the skies together. 
                Experience personalized travel designed for those who refuse to leave family behind.
              </Paragraph>
            </TextFrame>
            <MobileHeroImage />
            <BookNowButton>Book Now</BookNowButton>
          </SectionText>
        </HeroFrame>
        <Navbar />
        <ContentWrapper>
          <DestinationSection />
          <OurDestinations />
          <VideoIntro />
          <ReasonsPetJet />
        </ContentWrapper>
      </PageContainer>
    </Layout>
  );
};

export default LandingPage;