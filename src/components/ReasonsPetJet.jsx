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

  @media (max-width: 768px) {
    padding: 80px 24px;
    gap: 24px;
    background: linear-gradient(0deg, #FDF3E6 0%, #FDF3E6 100%), 
                linear-gradient(180deg, rgba(255, 255, 255, 0) 86%, white 100%), 
                linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 14%);
  }
`;

const Header = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  @media (max-width: 768px) {
    gap: 24px;
    height: 125px;
  }
`;

const Title = styled.h2`
  font-size: 48px;
  color: ${colors.darkBlue};
  font-weight: 700;
  margin: 0;

  .highlight {
    color: #55AD8B;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }
`;

const BookNowButton = styled.button` 
  background: ${colors.coral};
  color: white;
  padding: 16px 40px;
  border-radius: 8px;
  border: none;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 12px 22px;
    font-size: 14px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  padding: 50px 205px;
  justify-content: center;
  align-items: flex-start;
  gap: 48px 80px;
  align-self: stretch;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
`;

const Card = styled.div`
  display: flex;
  width: 350px;
  height: 280px;
  padding: 40px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 40px;
  background: #FFF;
  box-shadow: 0px 4px 24px 0px rgba(145, 84, 6, 0.09);

  @media (max-width: 768px) {
    width: 100%;
    height: 180px;
    padding: 24px 20px;
    border-radius: 28px;
    gap: 12px;

    &:nth-child(3) {
      grid-column: 1 / -1;
    }
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

const CardTitle = styled.h3`
  font-size: 24px;
  color: ${colors.darkBlue};
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
    font-weight: 500;
  }
`;

const CardDescription = styled.p`
  color: #5F5F5F;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
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
        <Title>
          Why <span className="highlight">Choose</span><br />
          Pet Jet Express
        </Title>
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