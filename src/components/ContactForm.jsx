import React, { useState } from 'react';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints';
import emailIcon from '../assets/icons/sms.svg';
import phoneIcon from '../assets/icons/call.svg';
import emailjs from '@emailjs/browser';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  padding: 0 100px;
  margin-top: 120px;
  padding-top: 40px;
  padding-bottom: 80px;
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;

  ${devices.mobile} {
    grid-template-columns: 1fr;
    padding: 0 10px;
    gap: 20px;
    padding-top: 0px;
    padding-bottom: 40px;
  }
`;

const DirectContactSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
`;

const Title = styled.h2`
  color: #00252E;
  font-size: 24px;
  font-weight: 700;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const IconContainer = styled.div`
  width: 64px;
  height: 64px;
  padding: 8px;
  background: #EDFBFF;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InfoLabel = styled.div`
  color: #00252E;
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
`;

const InfoValue = styled.div`
  color: #5F5F5F;
  font-size: 20px;
  font-weight: 400;
`;

const FormSection = styled.div`
  width: 100%;
  max-width: 603px;
  padding: 48px;
  background: white;
  box-shadow: 0px 6px 38px rgba(9, 59, 40, 0.10);
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;

  ${devices.mobile} {
    max-width: 100%;
    padding: 24px;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  color: #3D3D3D;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 48px;
  padding: 12px 18px;
  border-radius: 5px;
  border: 1px solid #DEDEDE;
  display: flex;
  align-items: center;
  background: white;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  color: #3D3D3D;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  background: transparent;

  &::placeholder {
    color: #B5B5B5;
  }
`;

const SelectWrapper = styled(InputWrapper)`
  justify-content: space-between;
`;

const TextAreaWrapper = styled(InputWrapper)`
  height: 106px;
  align-items: flex-start;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  color: #3D3D3D;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  resize: none;
  background: transparent;

  &::placeholder {
    color: #B5B5B5;
  }
`;

const SubmitButton = styled.button`
  width: 166px;
  padding: 16px 28px;
  background: #EF674A;
  border-radius: 8px;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

const Select = styled.select`
  width: 100%;
  border: none;
  outline: none;
  color: #B5B5B5;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  background: transparent;
  appearance: none;
  cursor: pointer;

  &:not(:placeholder-shown) {
    color: #3D3D3D;
  }
`;

const ChevronIcon = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    width: 17.34px;
    height: 8.60px;
    position: absolute;
    left: 3.33px;
    top: 8.20px;
    background: #084453;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petCategory: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_1,
        {
          to_email: 'kyra@petjetexpress.com,dransjel@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          pet_category: formData.petCategory,
          message: formData.message,
          reply_to: formData.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        petCategory: '',
        message: ''
      });

      alert('Thank you for your message. We will get back to you soon!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, there was an error sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <DirectContactSection>
        <Title>Want to reach out directly?</Title>
        <ContactInfo>
          <InfoItem>
            <IconContainer>
              <img src={emailIcon} alt="Email" />
            </IconContainer>
            <InfoText>
              <InfoLabel>Email:</InfoLabel>
              <InfoValue>kyra@petjetexpress.com</InfoValue>
            </InfoText>
          </InfoItem>
          <InfoItem>
            <IconContainer>
              <img src={phoneIcon} alt="Phone" />
            </IconContainer>
            <InfoText>
              <InfoLabel>Phone:</InfoLabel>
              <InfoValue>(+44) 7490 399 450</InfoValue>
            </InfoText>
          </InfoItem>
        </ContactInfo>
      </DirectContactSection>

      <FormSection>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Name</Label>
            <InputWrapper>
              <Input 
                type="text" 
                placeholder="Full name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </InputWrapper>
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <InputWrapper>
              <Input 
                type="email" 
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </InputWrapper>
          </FormGroup>
          <FormGroup>
            <Label>Phone Number</Label>
            <InputWrapper>
              <Input 
                type="tel" 
                placeholder="Enter Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </InputWrapper>
          </FormGroup>
          <FormGroup>
            <Label>Pet Category</Label>
            <SelectWrapper>
              <Select 
                value={formData.petCategory}
                onChange={(e) => setFormData({...formData, petCategory: e.target.value})}
                required
              >
                <option value="" disabled>Choose Category</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="other">Other</option>
              </Select>
              <ChevronIcon />
            </SelectWrapper>
          </FormGroup>
          <FormGroup>
            <Label>Message</Label>
            <TextAreaWrapper>
              <TextArea 
                placeholder="Tell us about more about your query..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              />
            </TextAreaWrapper>
          </FormGroup>
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Get in Touch'}
          </SubmitButton>
        </Form>
      </FormSection>
    </Container>
  );
};

export default ContactForm; 