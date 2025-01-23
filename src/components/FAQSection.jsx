import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints';

const Section = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px 100px;
  width: 100vw;
  max-width: 100%;
  margin: 0 auto;

  ${devices.mobile} {
    padding: 40px 20px;
  }
`;

const FilterTabsContainer = styled.div`
  width: 100%;
  padding: 8px;
  background: #FFFFFF;
  border: 1px solid #E8E8E8;
  border-radius: 8px;
  margin-bottom: 40px;
  box-sizing: border-box;
`;

const FilterTabs = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Tab = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background: ${props => props.$active ? 'rgb(239, 103, 74)' : 'transparent'};
  color: ${props => props.$active ? 'white' : 'rgb(33, 39, 42)'};
  font-size: 16px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.$active ? 'rgb(239, 103, 74)' : '#F4F4F4'};
  }
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FAQItem = styled.div`
  border-radius: 8px;
  background: ${props => props.$isOpen ? '#FDF3E6' : 'white'};
  padding: 24px;
  cursor: pointer;
  transition: all 0.2s ease;
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(0, 37, 46);
  font-weight: 500;
  font-size: 18px;
`;

const ToggleIcon = styled.span`
  color: ${props => props.$isOpen ? 'rgb(239, 103, 74)' : 'rgb(0, 37, 46)'};
  font-size: 24px;
  font-weight: 300;
`;

const Answer = styled.div`
  margin-top: ${props => props.$isOpen ? '16px' : '0'};
  height: ${props => props.$isOpen ? 'auto' : '0'};
  overflow: hidden;
  opacity: ${props => props.$isOpen ? '1' : '0'};
  transition: all 0.3s ease;
  color: rgb(33, 39, 42);
  line-height: 1.6;
`;

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [openQuestion, setOpenQuestion] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Map WordPress category IDs to our tab names
  const categoryMap = {
    3: 'Process',
    4: 'Pricing',
    5: 'Pet-related',
    6: 'Bookings',
    7: 'Safety Measures',
    8: 'Facilities'
  };

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch('http://wordpress.grysolle.com/wp-json/wp/v2/faqs');
        if (!response.ok) {
          throw new Error('Failed to fetch FAQs');
        }
        const data = await response.json();
        
        // Transform the data to match our format
        const transformedFaqs = data.map(faq => ({
          id: faq.id,
          question: faq.title.rendered,
          answer: faq.content.rendered,
          category: categoryMap[faq.faq_type[0]] || 'Other'
        }));

        setFaqs(transformedFaqs);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  // Get unique categories from the fetched FAQs
  const tabs = ['All', ...new Set(faqs.map(faq => faq.category))];

  // Filter FAQs based on active tab
  const filteredFAQs = activeTab === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeTab);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Section>
      <FilterTabsContainer>
        <FilterTabs>
          {tabs.map(tab => (
            <Tab 
              key={tab}
              $active={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Tab>
          ))}
        </FilterTabs>
      </FilterTabsContainer>
      
      <FAQList>
        {filteredFAQs.map(faq => (
          <FAQItem 
            key={faq.id}
            $isOpen={openQuestion === faq.id}
            onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
          >
            <Question>
              {faq.question}
              <ToggleIcon $isOpen={openQuestion === faq.id}>
                {openQuestion === faq.id ? '−' : '+'}
              </ToggleIcon>
            </Question>
            <Answer 
              $isOpen={openQuestion === faq.id}
              dangerouslySetInnerHTML={{ __html: faq.answer }}
            />
          </FAQItem>
        ))}
      </FAQList>
    </Section>
  );
};

export default FAQSection; 