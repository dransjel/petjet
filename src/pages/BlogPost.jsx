import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints';
import Layout from '../components/layout/Layout';
import Navbar from '../components/Navbar';
import BookingBanner from '../components/BookingBanner';
import newsDog from '../assets/images/News_dog.png';
import heroMobile from '../assets/images/mobile_News_Dog.png';

const PageContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  overflow-x: hidden;
  position: relative;
  background: white;
`;

// Hero Section Styles
const HeroFrame = styled.div`
  width: 100%;
  height: 800px;
  background: #9ED0DF;
  position: relative;
  overflow: hidden;

  ${devices.mobile} {
    height: 93vh;
  }
`;

const HeroBanner = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 40%;
  height: 100%;
  background-image: url(${props => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  border-radius: 24px 0 0 24px;
  margin-right: -1px;

  ${devices.mobile} {
    display: none;
  }
`;

const HeroContent = styled.div`
  display: flex;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 100px;
  align-items: center;
  gap: 60px;

  ${devices.mobile} {
    flex-direction: column;
    padding: 20px;
    gap: 0px;
    align-items: bottom;
    margin-top: 80px;
  }
`;

const HeroTextSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0px;
  max-width: 515px;
  order: 1;

  ${devices.mobile} {
    text-align: center;
    align-items: center;
    order: 1;
    max-width: 100%;
    margin-bottom: 0px;
  }
`;

const HeroImageSection = styled.div`
  flex: 1;
  height: 500px;
  border-radius: 24px;
  overflow: hidden;
  order: 2;

  ${devices.mobile} {
    height: 300px;
    width: 100%;
    order: 2;
    margin-top: -250px;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
`;

const SectionText = styled.div`
  position: absolute;
  left: 100px;
  top: 273px;
  width: 515px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  z-index: 2;

  ${devices.mobile} {
    position: static;
    width: 100%;
    padding: 0 20px;
    text-align: center;
    align-items: center;
    margin-top: 30px;
    box-sizing: border-box;
  }
`;

const TextFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MainHeadline = styled.h1`
  color: rgb(0, 37, 46);
  font-family: 'Lato', sans-serif;
  font-size: 48px;
  line-height: 58px;
  font-weight: 900;
  margin: 0;

  ${devices.mobile} {
    font-size: 36px;
    line-height: 43px;
  }
`;

const Paragraph = styled.p`
  color: rgb(33, 39, 42);
  font-size: 18px;
  line-height: 27px;
  margin: 0;
  max-width: 515px;
  white-space: pre-line;

  ${devices.mobile} {
    font-size: 16px;
    line-height: 24px;
    max-width: 335px;
  }
`;

const NewsHeroImage = styled.div`
  display: none;
  
  ${devices.mobile} {
    display: block;
    width: 100%;
    max-width: 382px;
    height: 340px;
    margin: 0 auto;
    background-image: url(${heroMobile});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 10px;
  }
`;

const CallbackButton = styled.button`
  width: fit-content;
  height: 54px;
  background: rgb(239, 103, 74);
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 16px 28px;
`;

// Blog Content Styles
const ContentWrapper = styled.div`
  position: relative;
  background: white;
  width: 100%;
`;

const BlogContent = styled.div`
  max-width: 800px;
  margin: 80px auto;
  padding: 0 20px;

  ${devices.mobile} {
    margin: 40px auto;
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 24px;
  margin-bottom: 40px;

  ${devices.mobile} {
    height: 300px;
  }
`;

const BlogTitle = styled.h1`
  color: #00252E;
  font-family: 'Lato', sans-serif;
  font-size: 48px;
  line-height: 1.2;
  margin: 0;

  ${devices.mobile} {
    font-size: 36px;
  }
`;

const BlogDate = styled.div`
  color: rgb(239, 103, 74);
  font-size: 14px;
  font-weight: 700;
`;

const BlogText = styled.div`
  font-size: 18px;
  line-height: 1.6;
  color: #21272A;

  h3, h4 {
    color: #00252E;
    margin: 40px 0 20px;
  }

  p {
    margin-bottom: 20px;
  }

  ul {
    margin-bottom: 20px;
    padding-left: 20px;
  }

  ${devices.mobile} {
    font-size: 16px;
  }
`;

const BlogPost = () => {
  const { link } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch('http://wordpress.grysolle.com/wp-json/wp/v2/blogs');
        const data = await response.json();
        const matchingPost = data.find(post => post.acf.link === link);
        
        if (matchingPost) {
          setPost({
            title: matchingPost.title.rendered,
            content: matchingPost.content.rendered,
            date: matchingPost.acf.date,
            image: matchingPost.acf.summary_image.url
          });
        }
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [link]);

  const handleCallbackClick = () => {
    navigate('/contact');
  };

  if (isLoading) return <div>Loading...</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <Layout>
      <PageContainer>
        <Navbar />
        <HeroFrame>
          <HeroContent>
            <HeroTextSection>
              <BlogTitle>{post.title}</BlogTitle>
              <BlogDate>{post.date}</BlogDate>
            </HeroTextSection>
            <HeroImageSection>
              <HeroImage src={post.image} alt={post.title} />
            </HeroImageSection>
          </HeroContent>
        </HeroFrame>
        <ContentWrapper>
          <BlogContent>
            <BlogText dangerouslySetInnerHTML={{ __html: post.content }} />
          </BlogContent>
          <BookingBanner />
        </ContentWrapper>
      </PageContainer>
    </Layout>
  );
};

export default BlogPost; 