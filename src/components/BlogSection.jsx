import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints';
import { useNavigate } from 'react-router-dom';

const Section = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 100px;

  ${devices.mobile} {
    padding: 40px 20px;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 40px;

  ${devices.mobile} {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const BlogCard = styled.div`
  background: #9ED0DF;
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-4px);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  position: relative;
`;

const BlogTitle = styled.h3`
  color: #00252E;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  line-height: 1.3;
`;

const BlogSummary = styled.p`
  color: #21272A;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
  margin-bottom: 40px;
`;

const BlogDate = styled.span`
  color: rgb(239, 103, 74);
  font-size: 14px;
  font-weight: 700;
  position: absolute;
  bottom: 24px;
  left: 24px;
`;

const BlogSection = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://wordpress.grysolle.com/wp-json/wp/v2/blogs');
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        
        // Transform the data to match our component structure
        const transformedBlogs = data.map(blog => ({
          id: blog.id,
          image: blog.acf.summary_image.url,
          title: blog.title.rendered,
          summary: blog.acf.summary,
          date: blog.acf.date,
          link: blog.acf.link
        }));

        setBlogs(transformedBlogs);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleBlogClick = (link) => {
    navigate(`/news/${link}`);
  };

  if (isLoading) {
    return <Section>Loading...</Section>;
  }

  if (error) {
    return <Section>Error: {error}</Section>;
  }

  return (
    <Section>
      <BlogGrid>
        {blogs.map(blog => (
          <BlogCard 
            key={blog.id} 
            onClick={() => handleBlogClick(blog.link)}
          >
            <BlogImage src={blog.image} alt={blog.title} />
            <BlogContent>
              <BlogTitle>{blog.title}</BlogTitle>
              <BlogSummary>{blog.summary}</BlogSummary>
              <BlogDate>{blog.date}</BlogDate>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </Section>
  );
};

export default BlogSection; 