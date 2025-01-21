import { useState } from 'react';
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

  @media (max-width: 768px) {
    padding: 60px 20px;
    width: 100%;
  }
`;

const Title = styled.h2`
  font-family: Lato;
  color:black ;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 40px 0;
  line-height: 58px;
  text-align: center;
  margin: 0;
  z-index: 1;

  span {
    color: #56AC8A;
  }
`;

const CarouselDots = styled.div`
  display: none;
  gap: 8px;
  margin-top: 24px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.$active ? '#002530' : '#D9D9D9'};
  cursor: pointer;
`;

const DestinationsGrid = styled.div`
  display: flex;
  gap: 80px;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 20px;
    padding: 0 20px;
    margin: 0 -20px;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
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
  flex-shrink: 0;

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

  @media (max-width: 768px) {
    width: calc(100vw - 40px);
    height: 340px;
    scroll-snap-align: center;
    border-radius: 24px;
  }
`;

const CityIcon = styled.img`
  width: 106px;
  height: 124px;
  z-index: 2;
`;

const CityName = styled.h3`
color: #FFF;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
  margin: 0;
  z-index: 2;
`;

const OurDestinations = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const destinations = [
    { image: nyImage, icon: nyIcon, name: "New York" },
    { image: londonImage, icon: londonIcon, name: "London" },
    { image: dubaiImage, icon: dubaiIcon, name: "Dubai" }
  ];

  const handleScroll = (event) => {
    const element = event.target;
    const scrollPosition = element.scrollLeft;
    const cardWidth = element.offsetWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    setActiveIndex(newIndex);
  };

  return (
    <Section>
      <Title>Our <span>Destinations</span></Title>
      <DestinationsGrid onScroll={handleScroll}>
        {destinations.map((destination, index) => (
          <DestinationCard key={destination.name}>
            <img className="background" src={destination.image} alt={destination.name} />
            <CityIcon src={destination.icon} alt={`${destination.name} icon`} />
            <CityName>{destination.name}</CityName>
          </DestinationCard>
        ))}
      </DestinationsGrid>
      <CarouselDots>
        {destinations.map((_, index) => (
          <Dot 
            key={index} 
            $active={index === activeIndex} 
            onClick={() => {
              const grid = document.querySelector(DestinationsGrid);
              grid.scrollTo({
                left: index * grid.offsetWidth,
                behavior: 'smooth'
              });
            }}
          />
        ))}
      </CarouselDots>
    </Section>
  );
};

export default OurDestinations; 