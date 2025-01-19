import styled from 'styled-components';
import nyImage from '../assets/images/nyImage.jpg';
import londonImage from '../assets/images/londonImage.jpg';
import dubaiImage from '../assets/images/dubaiImage.jpg';
import nyIcon from '../assets/images/ny-icon.svg';
import londonIcon from '../assets/images/london-icon.svg';
import dubaiIcon from '../assets/images/dubai-icon.svg';

const Section = styled.section`
display: flex;
padding: 120px 205px;
flex-direction: column;
align-items: center;
gap: 48px;
align-self: stretch; 
background: linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 13.87%), linear-gradient(180deg, rgba(255, 255, 255, 0.00) 86.13%, #FFF 100%), #FDF3E6;
`;

const Title = styled.h2`
  font-family: Lato;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: normal;
  font-size: 48px;
  padding: 40px 0;
  line-height: 58px;
  text-align: center;
  margin: 0;
  z-index: 1;

  span {
    color: #56AC8A;
  }
`;

const DestinationsGrid = styled.div`
  display: flex;
  gap: 80px;
  z-index: 1;
`;

const DestinationCard = styled.div`
  width: 290px;
  height: 372px;
  border-radius: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 102px;
  gap: 12px;
  overflow: hidden;
  box-shadow: 0px 4px 24px rgba(145, 84, 5, 0.09);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  img.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CityIcon = styled.img`
  width: 106px;
  height: 124px;
  z-index: 2;
`;

const CityName = styled.h3`
color: #FFF;
font-family: Satoshi;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
  margin: 0;
  z-index: 2;
`;

const OurDestinations = () => {
  return (
    <Section>
      <Title>Our <span>Destinations</span></Title>
      <DestinationsGrid>
        <DestinationCard>
          <img className="background" src={nyImage} alt="New York" />
          <CityIcon src={nyIcon} alt="New York icon" />
          <CityName>New York</CityName>
        </DestinationCard>

        <DestinationCard>
          <img className="background" src={londonImage} alt="London" />
          <CityIcon src={londonIcon} alt="London icon" />
          <CityName>London</CityName>
        </DestinationCard>

        <DestinationCard>
          <img className="background" src={dubaiImage} alt="Dubai" />
          <CityIcon src={dubaiIcon} alt="Dubai icon" />
          <CityName>Dubai</CityName>
        </DestinationCard>
      </DestinationsGrid>
    </Section>
  );
};

export default OurDestinations; 