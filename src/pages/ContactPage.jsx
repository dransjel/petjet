import React, { useRef } from 'react';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints';
import Navbar from '../components/Navbar';
import Layout from '../components/layout/Layout';
import contactDog from '../assets/images/contactdog.png';
import MobileContactDog from '../assets/images/contact-dog-mobile.jpg';
import ContactForm from '../components/ContactForm';
import BookingBanner from '../components/BookingBanner';

const PageContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  overflow-x: hidden;
  position: relative;
  background: white;
  
  ${devices.mobile} {
    max-width: 100vw;
    overflow-x: hidden;
  }
`;

const HeroFrame = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 800px;
  background: #55AD8B;
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
  top: -37px;
  width: 60%;
  height: 926px;
  background-image: url(${props => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  pointer-events: none;

  ${devices.mobile} {
    display: none;
  }
`;

const SectionText = styled.div`
  position: absolute;
  left: 100px;
  top: 267px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  z-index: 2;
  width: 40%;

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
  color: white;
  font-size: 48px;
  line-height: 58px;
  font-weight: 700;
  margin: 0;

  ${devices.mobile} {
    font-size: 36px;
    line-height: 43px;
  }
`;

const Paragraph = styled.p`
  color: white;
  font-size: 20px;
  line-height: 27px;
  margin: 0;
  max-width: 497px;

  ${devices.mobile} {
    font-size: 16px;
    line-height: 24px;
    max-width: 335px;
  }
`;

const CallbackButton = styled.button`
  width: 210px;
  height: 54px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 16px 28px;
  background: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  
  /* Text styling */
  color: #EF674A;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  word-wrap: break-word;

  /* Optional hover state */
  &:hover {
    background: rgba(255, 255, 255, 0.9);
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

const ContactmobileImage = styled.div`
  display: none;
  
  ${devices.mobile} {
    display: block;
    width: 100%;
    max-width: 382px;
    height: 340px;
    margin: 0 auto;
    background-image: url(${MobileContactDog});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 10px;
  }
`;

const ContactPage = () => {
  const formRef = useRef(null);

  const handleCallbackClick = () => {
    formRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <Layout>
      <PageContainer>
        <Navbar />
        <HeroFrame>
          <HeroBanner $backgroundImage={contactDog} />
          <SectionText>
            <TextFrame>
              <MainHeadline>Contact Us</MainHeadline>
              <Paragraph>
                Reach out, we're here to make your pet's journey smooth and simple
              </Paragraph>
            </TextFrame>
            <ContactmobileImage/>
            <CallbackButton onClick={handleCallbackClick}>
              Request A Callback
            </CallbackButton>
          </SectionText>
        </HeroFrame>
        <ContentWrapper>
          <div ref={formRef}>
            <ContactForm />
          </div>
          <BookingBanner />
        </ContentWrapper>
      </PageContainer>
    </Layout>
  );
};

export default ContactPage; 