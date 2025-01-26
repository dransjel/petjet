import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { devices } from '../styles/breakpoints';

const BannerContainer = styled.div`
  width: 100%;
  max-width: 1028px;
  margin: 80px auto;
  padding: 80px 168px;
  background: #55AD8B;
  border-radius: 40px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 48px;
  position: relative;

  ${devices.mobile} {
    padding: 40px 24px;
    gap: 24px;
    margin: 40px 20px;
    width: calc(100% - 40px);
    border-radius: 20px;
  }
`;

const DecorativeShape = styled.div`
  width: 217.24px;
  height: 262.73px;
  transform: rotate(1.67deg);
  transform-origin: 0 0;
  background: #8ACBB0;
  position: absolute;
  
  &.top {
    left: 0;
    top: 0;
  }
  
  &.bottom {
    right: 0;
    bottom: 0;
    width: 212.24px;
    height: 256.69px;
  }
`;

const ContentWrapper = styled.div`
  align-self: stretch;
  max-width: 692px;
  margin: 0 auto;
  height: 99px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
  z-index: 1;
`;

const Title = styled.h2`
  text-align: center;
  color: white;
  font-size: 48px;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  word-wrap: break-word;

  ${devices.mobile} {
    font-size: 28px;
  }
`;

const Subtitle = styled.div`
  align-self: stretch;
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: 400;
  word-wrap: break-word;

  ${devices.mobile} {
    font-size: 16px;
  }
`;

const QuoteButton = styled.button`
  width: 166px;
  padding: 16px 28px;
  background: white;
  border-radius: 8px;
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  z-index: 1;
  
  color: #EF674A;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  word-wrap: break-word;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
`;

const BookingBanner = () => {
  const navigate = useNavigate();

  const handleQuoteClick = () => {
    navigate('/booking');
  };

  return (
    <BannerContainer>
      <DecorativeShape className="top" />
      <ContentWrapper>
        <Title>Ready to Fly Side by Side?</Title>
        <Subtitle>
          Make your next journey unfur-gettable. Book your flight today.
        </Subtitle>
      </ContentWrapper>
      <DecorativeShape className="bottom" />
      <QuoteButton onClick={handleQuoteClick}>Book Now</QuoteButton>
    </BannerContainer>
  );
};

export default BookingBanner; 