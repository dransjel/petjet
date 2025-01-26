import React, { useState } from 'react';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints';
import emailjs from '@emailjs/browser';

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const PopupContent = styled.div`
  background: white;
  padding: 48px;
  border-radius: 24px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  z-index: 10000;

  ${devices.mobile} {
    padding: 24px;
    width: 95%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: #EF674A;
  font-size: 24px;
`;

const Title = styled.h2`
  font-family: 'Lato';
  font-weight: 700;
  font-size: 32px;
  color: #00252E;
  margin-bottom: 32px;
  text-align: center;
`;

const FlightInfo = styled.div`
  font-family: 'Lato';
  font-weight: 700;
  font-size: 18px;
  color: #00252E;
  background: #F8F8F8;
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 32px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionTitle = styled.h3`
  font-family: 'Satoshi', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #00252E;
  margin: 0;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 24px;
  
  ${devices.mobile} {
    flex-direction: column;
    gap: 16px;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  margin-bottom: 24px;
`;

const Label = styled.label`
  color: #00252E;
  font-family: 'Satoshi', sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 16px;
  border: 1px solid #E5E5E5;
  border-radius: 8px;
  font-family: 'Satoshi', sans-serif;
  font-size: 16px;
  color: #00252E;
  background: white;
  
  &::placeholder {
    color: #B5B5B5;
  }

  &:focus {
    outline: none;
    border-color: #EF674A;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 16px;
  border: 1px solid #E5E5E5;
  border-radius: 8px;
  font-family: 'Satoshi', sans-serif;
  font-size: 16px;
  color: #00252E;
  background: white;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='14' height='8' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1 1L7 7L13 1' stroke='%23EF674A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 16px center;
  
  &:focus {
    outline: none;
    border-color: #EF674A;
  }

  option {
    color: #00252E;
  }

  option:first-child {
    color: #B5B5B5;
  }
`;

const BookNowButton = styled.button`
  width: 100%;
  padding: 16px;
  background: #EF674A;
  border-radius: 8px;
  border: none;
  color: white;
  font-family: 'Satoshi', sans-serif;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: #e85835;
  }

  &:disabled {
    background: #B5B5B5;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.span`
  color: #EF674A;
  font-size: 12px;
  margin-top: 4px;
`;

const BookingPopup = ({ flight, onClose }) => {
  const [numPets, setNumPets] = useState('0');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    // Pet 1
    pet1Name: '',
    pet1Breed: '',
    pet1Health: '',
    pet1Temperament: '',
    pet1Weight: '',
    pet1WeightUnit: 'kg',
    // Pet 2
    pet2Name: '',
    pet2Breed: '',
    pet2Health: '',
    pet2Temperament: '',
    pet2Weight: '',
    pet2WeightUnit: 'kg',
  });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    // Allows for international format with optional country code
    const re = /^\+?[\d\s-()]{10,}$/;
    return re.test(phone);
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate personal information
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Validate pet information if pets are selected
    if (numPets !== '0') {
      if (!formData.pet1Name.trim()) {
        newErrors.pet1Name = 'Pet name is required';
      }
      if (!formData.pet1Breed.trim()) {
        newErrors.pet1Breed = 'Pet breed is required';
      }

      if (numPets === '2') {
        if (!formData.pet2Name.trim()) {
          newErrors.pet2Name = 'Pet name is required';
        }
        if (!formData.pet2Breed.trim()) {
          newErrors.pet2Breed = 'Pet breed is required';
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      alert('Please fill in all required fields correctly before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare pet 2 data - use NA if only 1 pet selected
      const pet2Data = numPets === '2' ? {
        pet2_name: formData.pet2Name,
        pet2_breed: formData.pet2Breed,
        pet2_health: formData.pet2Health,
        pet2_temperament: formData.pet2Temperament,
        pet2_weight: formData.pet2Weight,
        pet2_weight_unit: formData.pet2WeightUnit,
      } : {
        pet2_name: 'NA',
        pet2_breed: 'NA',
        pet2_health: 'NA',
        pet2_temperament: 'NA',
        pet2_weight: 'NA',
        pet2_weight_unit: 'NA',
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_2,
        {
          to_email: 'kyra@petjetexpress.com,dransjel@gmail.com',
          from_name: formData.firstName,
          from_surname: formData.lastName,
          from_email: formData.email,
          phone: formData.phone,
          date: flight.acf.date,
          from_destination: flight.acf.from_destination,
          from_time: flight.acf.from_time,
          to_destination: flight.acf.to_destination,
          to_time: flight.acf.to_time,
          price: formatPrice(flight.acf.price),
          flight_stops: flight.acf.flight_stops,
          num_pets: numPets,
          // Pet 1 details
          pet1_name: formData.pet1Name,
          pet1_breed: formData.pet1Breed,
          pet1_health: formData.pet1Health,
          pet1_temperament: formData.pet1Temperament,
          pet1_weight: formData.pet1Weight,
          pet1_weight_unit: formData.pet1WeightUnit,
          // Pet 2 details
          ...pet2Data,
          reply_to: formData.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert('Thank you for your booking request. We will get back to you soon!');
      onClose();
    } catch (error) {
      console.error('Error sending booking:', error);
      alert('Sorry, there was an error submitting your booking. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  return (
    <PopupOverlay onClick={onClose}>
      <PopupContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>✕</CloseButton>
        <Title>Book Flight</Title>

        <FlightInfo>
          <div>Date: {flight.acf.date}</div>
          <div>{flight.acf.from_destination} - {flight.acf.from_time}</div>
          <div>{flight.acf.to_destination} - {flight.acf.to_time}</div>
          <div>Price: ${formatPrice(flight.acf.price)}</div>
          <div>{flight.acf.flight_stops}</div>
        </FlightInfo>

        <Form onSubmit={handleSubmit}>
          <FormSection>
            <InputGroup>
              <FormField>
                <Label>First Name*</Label>
                <Input 
                  type="text" 
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={e => setFormData({...formData, firstName: e.target.value})}
                />
                {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
              </FormField>
              <FormField>
                <Label>Last Name*</Label>
                <Input 
                  type="text" 
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={e => setFormData({...formData, lastName: e.target.value})}
                />
                {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
              </FormField>
            </InputGroup>
            
            <InputGroup>
              <FormField>
                <Label>Email*</Label>
                <Input 
                  type="email" 
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
                {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
              </FormField>
              <FormField>
                <Label>Phone*</Label>
                <Input 
                  type="tel" 
                  placeholder="Enter Phone No."
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
                {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
              </FormField>
            </InputGroup>

            <FormField>
              <Label>Number of pets*</Label>
              <Select 
                value={numPets}
                onChange={e => setNumPets(e.target.value)}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </Select>
            </FormField>
          </FormSection>

          {numPets !== '0' && (
            <>
              <FormSection>
                <SectionTitle>Pet 1 Details</SectionTitle>
                <FormField>
                  <Label>Name of Pet*</Label>
                  <Input 
                    type="text" 
                    placeholder="Enter pet name"
                    value={formData.pet1Name}
                    onChange={e => setFormData({...formData, pet1Name: e.target.value})}
                  />
                  {errors.pet1Name && <ErrorMessage>{errors.pet1Name}</ErrorMessage>}
                </FormField>
                
                <FormField>
                  <Label>Breed*</Label>
                  <Input 
                    type="text" 
                    placeholder="Enter breed"
                    value={formData.pet1Breed}
                    onChange={e => setFormData({...formData, pet1Breed: e.target.value})}
                  />
                  {errors.pet1Breed && <ErrorMessage>{errors.pet1Breed}</ErrorMessage>}
                </FormField>

                <FormField>
                  <Label>General Health</Label>
                  <Select
                    value={formData.pet1Health}
                    onChange={e => setFormData({...formData, pet1Health: e.target.value})}
                  >
                    <option value="">Choose an option</option>
                    <option value="fit">Fit</option>
                    <option value="normal">Normal</option>
                    <option value="poor">Poor</option>
                  </Select>
                </FormField>

                <FormField>
                  <Label>Temperament</Label>
                  <Select
                    value={formData.pet1Temperament}
                    onChange={e => setFormData({...formData, pet1Temperament: e.target.value})}
                  >
                    <option value="">Choose an option</option>
                    <option value="neutral">Neutral</option>
                    <option value="passive">Passive</option>
                    <option value="aggressive">Assertive/Aggressive</option>
                  </Select>
                </FormField>

                <InputGroup>
                  <FormField>
                    <Label>Weight</Label>
                    <Input 
                      type="number" 
                      placeholder="Enter weight"
                      value={formData.pet1Weight}
                      onChange={e => setFormData({...formData, pet1Weight: e.target.value})}
                    />
                  </FormField>
                  <FormField>
                    <Label>Weight Unit</Label>
                    <Select
                      value={formData.pet1WeightUnit}
                      onChange={e => setFormData({...formData, pet1WeightUnit: e.target.value})}
                    >
                      <option value="kg">kg</option>
                      <option value="lbs">lbs</option>
                    </Select>
                  </FormField>
                </InputGroup>
              </FormSection>

              {numPets === '2' && (
                <FormSection>
                  <SectionTitle>Pet 2 Details</SectionTitle>
                  <FormField>
                    <Label>Name of Pet*</Label>
                    <Input 
                      type="text" 
                      placeholder="Enter pet name"
                      value={formData.pet2Name}
                      onChange={e => setFormData({...formData, pet2Name: e.target.value})}
                    />
                    {errors.pet2Name && <ErrorMessage>{errors.pet2Name}</ErrorMessage>}
                  </FormField>
                  
                  <FormField>
                    <Label>Breed*</Label>
                    <Input 
                      type="text" 
                      placeholder="Enter breed"
                      value={formData.pet2Breed}
                      onChange={e => setFormData({...formData, pet2Breed: e.target.value})}
                    />
                    {errors.pet2Breed && <ErrorMessage>{errors.pet2Breed}</ErrorMessage>}
                  </FormField>

                  <FormField>
                    <Label>General Health</Label>
                    <Select
                      value={formData.pet2Health}
                      onChange={e => setFormData({...formData, pet2Health: e.target.value})}
                    >
                      <option value="">Choose an option</option>
                      <option value="fit">Fit</option>
                      <option value="normal">Normal</option>
                      <option value="poor">Poor</option>
                    </Select>
                  </FormField>

                  <FormField>
                    <Label>Temperament</Label>
                    <Select
                      value={formData.pet2Temperament}
                      onChange={e => setFormData({...formData, pet2Temperament: e.target.value})}
                    >
                      <option value="">Choose an option</option>
                      <option value="neutral">Neutral</option>
                      <option value="passive">Passive</option>
                      <option value="aggressive">Assertive/Aggressive</option>
                    </Select>
                  </FormField>

                  <InputGroup>
                    <FormField>
                      <Label>Weight</Label>
                      <Input 
                        type="number" 
                        placeholder="Enter weight"
                        value={formData.pet2Weight}
                        onChange={e => setFormData({...formData, pet2Weight: e.target.value})}
                      />
                    </FormField>
                    <FormField>
                      <Label>Weight Unit</Label>
                      <Select
                        value={formData.pet2WeightUnit}
                        onChange={e => setFormData({...formData, pet2WeightUnit: e.target.value})}
                      >
                        <option value="kg">kg</option>
                        <option value="lbs">lbs</option>
                      </Select>
                    </FormField>
                  </InputGroup>
                </FormSection>
              )}
            </>
          )}

          <BookNowButton 
            type="submit" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Book now'}
          </BookNowButton>
        </Form>
      </PopupContent>
    </PopupOverlay>
  );
};

export default BookingPopup; 