import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import insta1 from '../assets/images/insta_1.png';
import insta2 from '../assets/images/insta_2.png';
import insta3 from '../assets/images/insta_3.png';
import insta4 from '../assets/images/insta_4.png';
import insta5 from '../assets/images/insta_5.png';

const Section = styled.section`
  width: 100%;
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  background: #FFFFFF;

  @media (max-width: 768px) {
    padding: 40px 24px;
    gap: 24px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
`;

const Label = styled.div`
  color: #00252E;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 27px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 21px;
  }
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  color: #00252E;
  margin: 0;

  span {
    color: ${colors.green};
  }

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

const Description = styled.p`
  color: #5F5F5F;
  font-size: 20px;
  font-weight: 400;
  max-width: 800px;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  height: 748px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  position: relative;

  @media (max-width: 768px) {
    height: 480px;
    gap: 24px;
  }
`;

const CarouselWrapper = styled.div`
  width: 1240px;
  height: 646px;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    height: 400px;
    overflow: hidden;
  }
`;

const CarouselSlide = styled.img`
  position: absolute;
  border-radius: 40px;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    &.center {
      width: 246px;
      height: 400px;
      left: 50%;
      transform: translateX(-50%);
      top: 0;
      z-index: 3;
      border-radius: 24px;
    }

    &.left-1 {
      width: 180px;
      height: 292px;
      left: 0;
      top: 54px;
      border-radius: 16px;
      z-index: 2;
    }

    &.right-1 {
      width: 180px;
      height: 292px;
      right: 0;
      top: 54px;
      border-radius: 16px;
      z-index: 2;
    }

    &.left-2, &.right-2 {
      display: none;
    }
  }

  // Desktop styles remain unchanged
  @media (min-width: 769px) {
    &.center {
      width: 398px;
      height: 646px;
      left: 421px;
      top: 0;
      z-index: 3;
    }

    &.left-1 {
      width: 292px;
      height: 472px;
      left: 185px;
      top: 87px;
      border-radius: 32px;
      z-index: 2;
    }

    &.right-1 {
      width: 292px;
      height: 472px;
      left: 763px;
      top: 87px;
      border-radius: 32px;
      z-index: 2;
    }

    &.left-2 {
      width: 226px;
      height: 365px;
      left: 24px;
      top: 141px;
      border-radius: 24px;
      z-index: 1;
    }

    &.right-2 {
      width: 226px;
      height: 365px;
      left: 990px;
      top: 141px;
      border-radius: 24px;
      z-index: 1;
    }
  }
`;

const NavButton = styled.button`
  width: 48px;
  height: 48px;
  background: ${colors.coral};
  border-radius: 1200px;
  border: none;
  position: absolute;
  top: 301px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;

  &.prev {
    left: 0;
  }

  &.next {
    right: 0;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const FollowButton = styled.button`
  padding: 16px 28px;
  background: ${colors.coral};
  border-radius: 8px;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 14px;
  }
`;

const InstaPitch = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const images = [insta1, insta2, insta3, insta4, insta5];

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const getSlideStyle = (index) => {
    const position = (index - currentIndex + images.length) % images.length;
    const baseStyle = {
      opacity: 1,
      transform: 'scale(1)',
    };

    switch (position) {
      case 0: // center
        return {
          ...baseStyle,
          className: 'center',
          opacity: 1
        };
      case 1: // right-1
        return {
          ...baseStyle,
          className: 'right-1',
          opacity: 0.6
        };
      case images.length - 1: // left-1
        return {
          ...baseStyle,
          className: 'left-1',
          opacity: 0.6
        };
      case 2: // right-2
        return {
          ...baseStyle,
          className: 'right-2',
          opacity: 0.25
        };
      default: // left-2
        return {
          ...baseStyle,
          className: 'left-2',
          opacity: 0.25
        };
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <Section>
      <Header>
        <Label>Instagram</Label>
        <Title>Use <span>#PetJetExpress</span> to get Featured</Title>
        <Description>
          Stay updated with Pet Jet Express for behind-the-scenes looks, adorable pet travel 
          moments, and the latest news on pet-friendly destinations.
        </Description>
      </Header>

      <CarouselContainer>
        <CarouselWrapper
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {images.map((image, index) => {
            const style = getSlideStyle(index);
            return (
              <CarouselSlide
                key={index}
                src={image}
                alt={`Instagram ${index + 1}`}
                className={style.className}
                style={{ opacity: style.opacity }}
              />
            );
          })}
          <NavButton className="prev" onClick={handlePrev}>
            ←
          </NavButton>
          <NavButton className="next" onClick={handleNext}>
            →
          </NavButton>
        </CarouselWrapper>
        <FollowButton>Follow Us On Instagram</FollowButton>
      </CarouselContainer>
    </Section>
  );
};

export default InstaPitch; 