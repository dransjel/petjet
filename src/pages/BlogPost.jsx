import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints';
import Layout from '../components/layout/Layout';
import Navbar from '../components/Navbar';
import BookingBanner from '../components/BookingBanner';
import NewsHero from '../components/NewsHero';

const PageContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  overflow-x: hidden;
  position: relative;
  background: white;
`;

const BlogContent = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 100px;
  max-width: 800px;
  margin: 80px auto;
  padding: 0 20px;
  padding-top: 100px;
`;

const BlogImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 24px;
  margin-bottom: 40px;
`;

const BlogTitle = styled.h1`
  color: #00252E;
  font-family: 'Lato', sans-serif;
  font-size: 48px;
  line-height: 1.2;
  margin-bottom: 24px;

  ${devices.mobile} {
    font-size: 36px;
  }
`;

const BlogDate = styled.div`
  color: rgb(239, 103, 74);
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 40px;
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
`;

const BlogPost = () => {
  const { link } = useParams();
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

  if (isLoading) return <div>Loading...</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <Layout>
      <PageContainer>
        <Navbar />
        <NewsHero />
        <BlogContent>
          <BlogImage src={post.image} alt={post.title} />
          <BlogTitle>{post.title}</BlogTitle>
          <BlogDate>{post.date}</BlogDate>
          <BlogText dangerouslySetInnerHTML={{ __html: post.content }} />
        </BlogContent>
        <BookingBanner />
      </PageContainer>
    </Layout>
  );
};

export default BlogPost; 