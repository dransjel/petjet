import styled from 'styled-components';
import videoThumbnail from '../assets/images/video-thumbnail.jpg';

const Section = styled.section`
  width: 100%;
  height: 884px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  gap: 32px;
`;

const Title = styled.h2`
  width: 535px;
  height: 58px;
font-family: Lato;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: normal;
  text-align: center;
  margin: 0;

  span.company {
    color: #00252E;
  }
  
  span.highlight {
    color: #56AC8A;
  }
`;

const VideoContainer = styled.div`
  width: 1030px;
  height: 594px;
  position: relative;
  border-radius: 40px;
  overflow: hidden;
  cursor: pointer;
`;

const VideoThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.15);
`;

const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 88px;
  height: 88px;
  border-radius: 140px;
  background: white;
  border: 24px solid rgba(255, 255, 255, 0.32);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }
`;

const VideoIntro = () => {
  const handlePlayVideo = () => {
    // Add video play functionality here
    console.log('Play video');
  };

  return (
    <Section>
      <Title>
        <span className="company">Pet Jet Express</span>{' '}
        <span className="highlight">Takes Off</span>
      </Title>
      
      <VideoContainer onClick={handlePlayVideo}>
        <VideoThumbnail src={videoThumbnail} alt="Video thumbnail" />
      </VideoContainer>
    </Section>
  );
};

export default VideoIntro; 