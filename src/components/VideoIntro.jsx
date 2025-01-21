import styled from 'styled-components';
import videoThumbnail from '../assets/images/video-thumbnail.jpg';
import playIcon from '../assets/icons/play.svg';

const Section = styled.section`
  width: 100%;
  height: 884px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  gap: 32px;
  background: #FFFFFF;

  @media (max-width: 768px) {
    height: auto;
    padding: 60px 20px;
  }
`;

const Title = styled.h2`
  display: flex;
  gap: 12px;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }

  .company {
    color: #00252E;
    font-size: 48px;
    font-family: Lato;
    font-weight: 700;
    word-wrap: break-word;

    @media (max-width: 768px) {
      font-size: 32px;
    }
  }
  
  .highlight {
    color: #52AD8A;
    font-size: 48px;
    font-family: Lato;
    font-weight: 700;
    word-wrap: break-word;

    @media (max-width: 768px) {
      font-size: 32px;
    }
  }
`;

const VideoContainer = styled.div`
  width: 1030px;
  height: 594px;
  position: relative;
  border-radius: 40px;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
    border-radius: 24px;
  }
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
  padding: 0;
`;

const VideoIntro = () => {
  const handlePlayVideo = () => {
    // Add video play functionality here
    console.log('Play video');
  };

  return (
    <Section>
      <Title>
        <span className="company">Pet Jet Express</span>
        <span className="highlight">Takes Off</span>
      </Title>
      
      <VideoContainer onClick={handlePlayVideo}>
        <VideoThumbnail src={videoThumbnail} alt="Video thumbnail" />
        <Overlay />
        <PlayButton>
          <img src={playIcon} alt="Play video" />
        </PlayButton>
      </VideoContainer>
    </Section>
  );
};

export default VideoIntro; 