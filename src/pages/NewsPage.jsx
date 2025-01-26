import React from 'react';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints';
import Navbar from '../components/Navbar';
import Layout from '../components/layout/Layout';
import BookingBanner from '../components/BookingBanner';
import newsDog from '../assets/images/News_dog.png';
import heroMobile from '../assets/images/mobile_News_Dog.png';
import { useNavigate } from 'react-router-dom';
import BlogSection from '../components/BlogSection';

const PageContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  overflow-x: hidden;
  position: relative;
  background: white;
`;

const HeroFrame = styled.div`
  width: 100%;
  height: 800px;
  background: #9ED0DF;
  position: relative;
  overflow: hidden;
  margin-bottom: -800px;

  ${devices.mobile} {
    height: 93vh;
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

  ${devices.mobile} {
    font-size: 16px;
    line-height: 24px;
    max-width: 335px;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 800px;
  background: white;

  ${devices.mobile} {
    margin-top: 0;
  }
`;

const NewsHeroImage = styled.div`
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

const CallbackButton = styled.button`
  width: 210px;
  height: 54px;
    gap: 10px;
  padding: 16px 28px;
  background: rgb(239, 103, 74);
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 16px 28px;
`;

const NewsPage = () => {
  const navigate = useNavigate();
  
  const handleCallbackClick = () => {
    navigate('/contact');
  };

  return (
    <Layout>
      <PageContainer>
        <Navbar />
        <HeroFrame>
          <HeroBanner $backgroundImage={newsDog} />
          <SectionText>
            <TextFrame>
              <MainHeadline>Latest News</MainHeadline>
              <Paragraph>
                Stay updated with the latest news and updates from PetJet Express.
                {'\n\n'}
                Read all about it ..
              </Paragraph>
            </TextFrame>
            <NewsHeroImage />
            <CallbackButton onClick={handleCallbackClick}>
              Let's Discuss
            </CallbackButton>
          </SectionText>
        </HeroFrame>
        <ContentWrapper>
          <BlogSection />
          <BookingBanner />
        </ContentWrapper>
      </PageContainer>
    </Layout>
  );
};

export default NewsPage; 