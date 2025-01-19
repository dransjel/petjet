import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import SearchForm from '../components/SearchForm';
import Layout from '../components/layout/Layout';
import DestinationSectionComponent from '../components/DestinationSection';

const PageContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  position: relative;
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
`;

const Caption = styled.div`
  width: 1280px;
  height: 20px;
  color: rgb(0, 29, 108);
`;

const SecondaryHeadline = styled.div`
  width: 1280px;
  height: 97px;
  color: rgb(33, 39, 42);
`;

const TextFrame = styled.div`
  width: 515px;
  height: 159px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MainHeadline = styled.h1`
  width: 515px;
  height: 58px;
  color: rgb(255, 255, 255);
  font-family: 'Lato', sans-serif;
  font-size: 48px;
  line-height: 58px;
  margin: 0;
  padding: 0;
`;

const Paragraph = styled.p`
  width: 515px;
  height: 81px;
  color: white;
  font-size: 18px;
  line-height: 27px;
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
            <BookNowButton>Book Now</BookNowButton>
          </SectionText>
        </HeroFrame>
        <Navbar />
        <ContentWrapper>
          <DestinationSectionComponent />
        </ContentWrapper>
      </PageContainer>
    </Layout>
  );
};

export default LandingPage;