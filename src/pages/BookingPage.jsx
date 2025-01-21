import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import DestinationSection from '../components/DestinationSection';
import Footer from '../components/Footer';
import Layout from '../components/layout/Layout';

const PageContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const BookingPage = () => {
  return (
    <Layout>
      <PageContainer>
        <Navbar />
        <ContentWrapper>
          <DestinationSection />
        </ContentWrapper>
        <Footer />
      </PageContainer>
    </Layout>
  );
};

export default BookingPage; 