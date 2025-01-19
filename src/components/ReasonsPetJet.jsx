import styled from 'styled-components';
import { colors } from '../styles/colors';
import verifyIcon from '../assets/icons/verify.svg';
import profileIcon from '../assets/icons/profile.svg';
import starIcon from '../assets/icons/star.svg';
import petIcon from '../assets/icons/pet.svg';
import globalIcon from '../assets/icons/global.svg';

const Section = styled.section`
  width: 100%;
  padding: 120px 0;
  background: ${colors.beige};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`;

const Header = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`;

const Title = styled.h2`
  font-size: 48px;
  color: ${colors.darkBlue};
  
  span {
    color: ${colors.green};
  }
`;

const BookNowButton = styled.button` 
  background: ${colors.coral};
  color: white;
  padding: 16px 40px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 290px);
  gap: 40px;
  margin-top: 48px;
`;

const Card = styled.div`
  background: white;
  border-radius: 40px;
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const CardTitle = styled.h3`
  font-size: 24px;
  color: ${colors.darkBlue};
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: ${colors.gray};
  line-height: 1.5;
`;

const ReasonsPetJet = () => {
  const reasons = [
    {
      icon: verifyIcon,
      title: "Trust & Safety",
      description: "Certified handlers and industry-leading safety protocols."
    },
    {
      icon: profileIcon,
      title: "Together, Always",
      description: "No cargo holds—your pet stays right by your side."
    },
    {
      icon: starIcon,
      title: "Seamless Service",
      description: "Simple booking and administrative tasks."
    },
    {
      icon: petIcon,
      title: "Personalized Care",
      description: "Pet behaviorist sessions and gourmet in-flight treats."
    },
    {
      icon: globalIcon,
      title: "Global Adventures",
      description: "Explore destinations together, stress-free."
    }
  ];

  return (
    <Section>
      <Header>
        <Title>Why <span>Choose</span> Pet Jet Express</Title>
        <BookNowButton>Book Now</BookNowButton>
      </Header>
      
      <CardsContainer>
        {reasons.map((reason, index) => (
          <Card key={index}>
            <IconWrapper>
              <img src={reason.icon} alt={reason.title} />
            </IconWrapper>
            <CardTitle>{reason.title}</CardTitle>
            <CardDescription>{reason.description}</CardDescription>
          </Card>
        ))}
      </CardsContainer>
    </Section>
  );
};

export default ReasonsPetJet; 