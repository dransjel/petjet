import React from 'react';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints';
import Navbar from '../components/Navbar';
import DestinationSection from '../components/DestinationSection';
import Footer from '../components/Footer';
import Layout from '../components/layout/Layout';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  overflow-x: hidden;
  position: relative;
  background: white;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100vw;
  max-width: 100%;
  margin-top: 40px;

  ${devices.mobile} {
    width: 100%;
    padding: 0 16px;
    margin-top: 20px;
  }
`;

const BookingPage = () => {
  return (
    <Layout>
      <PageContainer>
        <Navbar isBookingPage={true} />
        <ContentWrapper>
          <DestinationSection />
        </ContentWrapper>
      </PageContainer>
    </Layout>
  );
};

export default BookingPage; 