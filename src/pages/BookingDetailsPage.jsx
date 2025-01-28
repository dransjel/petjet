import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from '../styles/breakpoints';
import Navbar from '../components/Navbar';
import Layout from '../components/layout/Layout';
import airplane from '../assets/images/airplane.svg';
import destination from '../assets/images/Destination.png';
import calendarIcon from '../assets/images/calendar.png';
import Vector from '../assets/icons/Vector.svg';
import emailjs from '@emailjs/browser';

const PageContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  overflow-x: hidden;
  position: relative;
  background: white;
`;

const VectorOverlay = styled.img`
  position: absolute;
  top: -100px;
  right: -50px;
  width: 420px;
  height: 500px;
  opacity: 1;
  transform: rotate(-10deg);
  z-index: 1;

    ${devices.mobile} {
    top: 140px;
    right: -50px;
    width: 200px;
    height: 200px;
  }

`;

const FlightSummary = styled.div`
  background: #FDF3E6;
  padding: 80px 100px;
  margin-top: 100px;
  position: relative;
  overflow: hidden;
  z-index: 2;
  
  ${devices.mobile} {
    padding: 24px;
    margin-top: 100px;
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

const FlightInfo = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  z-index: 1;

  ${devices.mobile} {
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: #5F5F5F;
    font-size: 16px;
    font-weight: 400;
  }
`;

const FlightDate = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  span {
    color: #00252E;
    font-size: 24px;
    font-family: 'Satoshi', sans-serif;
    font-weight: 700;
  }
`;

const FlightPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
  span {
    color: #00252E;
    font-size: 24px;
    font-family: 'Satoshi', sans-serif;
    font-weight: 700;
  }
`;
const CalendarIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;

const FlightRoute = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;

  ${devices.mobile} {
    display: flex;
  align-items: flex-start;  
  gap: 20px;
    flex-direction: column;
  }
`;

const RouteDisplay = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  ${devices.mobile} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 20px;
    padding: 0 10px;
  }
`;

const LocationTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  ${devices.mobile} {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 55px;

    &:last-child {
      text-align: right;
      align-items: flex-end;
      margin-left: auto;
    }

    .time {
      font-size: 18px;
      font-weight: 700;
      color: #00252E;
      line-height: 30px;
      width: 100%;
    }

    .location {
      font-size: 20px;
      font-weight: 700;
      color: #55AD8B;
      line-height: 30px;
      width: 100%;
    }
  }
`;

const LocationTime_destination = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-left: auto;

  .Time {
    margin-left: auto;
    margin-right: 50px;
  }

  ${devices.mobile} {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 55px;

    &:last-child {
      text-align: right;
      align-items: flex-end;
    }

    .time {
      font-size: 18px;
      font-weight: 700;
      color: #00252E;
      line-height: 30px;
      margin-left: auto;
    }

    .location {
      font-size: 20px;
      font-weight: 700;
      color: #55AD8B;
      line-height: 30px;
      margin-left: auto;
    }
  }
`;

const Time = styled.div`
  color: #00252E;
  font-size: 20px;
  font-family: 'Satoshi', sans-serif;
  font-weight: 700;
  line-height: 30px;
`;

const Location = styled.div`
  color: #55AD8B;
  font-size: 24px;
  font-family: 'Satoshi', sans-serif;
  font-weight: 700;
  line-height: 30px;
  margin-bottom: 8px;
`;

const FlightPath = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 26.37px;
  position: relative;
  flex-shrink: 0;
  margin-left: 30px;
  margin-right: 30px;

      &::after {
      content: '';
      position: absolute;
      width: calc(100% - 20px);
      height: 0;
      border: 1px dashed #55AD8B;
    }
  
  ${devices.mobile} {
    flex: 1;
    height: 26px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200%;
    
    &::after {
      content: '';
      position: absolute;
      width: calc(100% + 30px);
      height: 0;
      border: 1px dashed #55AD8B;
    }
  }

  .airplane {
    width: 24px;
    height: 24px;
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
    color: #55AD8B;

    ${devices.mobile} {
      left: -35px;
    }
  }

  .destination {
    width: 24px;
    height: 24px;
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
    color: #55AD8B;

    ${devices.mobile} {
      right: -35px;
    }
  }
`;

const FlightDetails = styled.div`
  color: #5F5F5F;
  font-size: 16px;
  font-family: 'Satoshi', sans-serif;
  font-weight: 400;
  line-height: 24px;

  ${devices.mobile} {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }
`;

const DetailItem = styled.div``;

const BookingContainer = styled.div`
  padding: 32px;
  border-radius: 20px;
  border: 1px solid #9ED0DF;
  margin: 60px auto;
  max-width: 1440px;

  ${devices.mobile} {
    padding: 40px 24px 80px 24px;
    border-radius: 16px;
    gap: 40px;
  }
`;

const BookingForm = styled.div`
  padding: 32px;
  border-radius: 20px;
  border: 1px solid #9ED0DF;
  margin: 60px auto;
  max-width: 1440px;

  ${devices.mobile} {
    padding: 24px;
    border-radius: 20px;
    border: 1px solid #9ED0DF;
    gap: 32px;
    margin: 20px auto;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 44px;

  ${devices.mobile} {
    gap: 20px;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${devices.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

const SectionTitle = styled.h2`
  color: #00252E;
  font-size: 24px;
  font-family: 'Satoshi', sans-serif;
  font-weight: 500;

  ${devices.mobile} {
    font-size: 20px;
    font-weight: 500;
    color: #00252E;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  ${devices.mobile} {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  ${devices.mobile} {
    gap: 6px;
    height: 70px;

    label {
      font-size: 12px;
      color: #5F5F5F;
      font-weight: 500;
      line-height: 20px;
    }

    input, select {
      padding: 12px;
      font-size: 12px;
      border-radius: 5px;
      border: 1px solid #E7E7E7;
    }

    ::placeholder {
      color: #5F5F5F;
      opacity: 0.4;
    }
  }
`;

const Label = styled.label`
  color: #5F5F5F;
  font-size: 16px;
  font-family: 'Satoshi', sans-serif;
  font-weight: 500;
  line-height: 20px;
`;

const Input = styled.input`
  padding: 12px 18px;
  border-radius: 5px;
  border: 1px solid #E7E7E7;
  font-size: 14px;
  font-family: 'Satoshi', sans-serif;
  font-weight: 500;
  color: #5F5F5F;
  background: white !important;
  background-color: white !important;

  &::placeholder {
    opacity: 0.4;
  }

  ${props => props.error && `
    border-color: #EF674A;
  `}
`;

const Select = styled.select`
  padding: 12px 18px;
  border-radius: 5px;
  border: 1px solid #E7E7E7;
  font-size: 14px;
  font-family: 'Satoshi', sans-serif;
  font-weight: 500;
  color: #5F5F5F;
  background: white !important;
  background-color: white !important;
  appearance: none;
  background-image: url('path-to-your-arrow-icon.svg');
  background-repeat: no-repeat;
  background-position: right 18px center;

  &::placeholder {
    opacity: 0.4;
  }

  ${props => props.error && `
    border-color: #EF674A;
  `}
`;

const PetCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 20px;
  border: 1px solid #EF674A;
  border-radius: 8px;

  ${devices.mobile} {
    padding: 10px 12px;
    gap: 16px;
    border-radius: 8px;
    border: 1px solid #EF674A;

    button {
      width: 20px;
      height: 20px;
    }

    span {
      font-size: 14px;
      font-weight: 700;
      color: #EF674A;
      padding: 2px 8px;
    }
  }
`;

const CounterButton = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  color: #EF674A;
  cursor: pointer;
`;

const CounterValue = styled.div`
  width: 31px;
  text-align: center;
  color: #EF674A;
  font-size: 16px;
  font-weight: 700;
`;

const BookButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 16px 28px;
  background: #EF674A;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  text-align: center;
  color: white;
  font-size: 16px;
  font-family: 'Satoshi', sans-serif;
  font-weight: 700;
  word-wrap: break-word;

  ${devices.mobile} {
    padding: 12px 22px;
    font-size: 14px;
    font-weight: 700;
    border-radius: 8px;
    margin-top: 80px;
    margin-bottom: 20px;
  }

  &:hover {
    background: #e85835;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorText = styled.span`
  color: #EF674A;
  font-size: 12px;
  margin-top: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 80px 150px;
  margin-top: -100px;

  ${devices.mobile} {
    padding: 20px;
    justify-content: center;
  }
`;

const PetFormSection = styled(FormSection)`
  display: ${props => props.visible ? 'flex' : 'none'};
`;

const BookingDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const flightDetails = location.state?.flightDetails;

  const [numPets, setNumPets] = useState(1);
  const [formData, setFormData] = useState({
    passengerName: '',
    email: '',
    phone: '',
    pets: [
      {
        name: '',
        breed: '',
        temperament: '',
        health: '',
        weight: ''
      }
    ]
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const temperamentOptions = ['Calm', 'Friendly', 'Anxious', 'Aggressive'];
  const healthOptions = ['Excellent', 'Good', 'Fair', 'Poor'];
  const weightOptions = ['0-5kg', '5-10kg', '10-20kg', '20-40kg', '40kg+'];

  useEffect(() => {
    if (!flightDetails) {
      navigate('/');
    }
  }, [flightDetails, navigate]);

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split(' ');
    return `${month} ${day} ${year}`;
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Passenger validation
    if (!formData.passengerName.trim()) newErrors.passengerName = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';

    // Pet validation
    if (formData.pets.length === 0) newErrors.pets = 'At least one pet is required';
    if (formData.pets.length > 2) newErrors.pets = 'No more than two pets are allowed';
    
    formData.pets.forEach((pet, index) => {
      if (!pet.name.trim()) newErrors[`pets.${index}.name`] = 'Pet name is required';
      if (!pet.breed.trim()) newErrors[`pets.${index}.breed`] = 'Breed is required';
      if (!pet.temperament) newErrors[`pets.${index}.temperament`] = 'Temperament is required';
      if (!pet.health) newErrors[`pets.${index}.health`] = 'Health status is required';
      if (!pet.weight) newErrors[`pets.${index}.weight`] = 'Weight is required';
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name.startsWith('pets.')) {
      const [_, index, field] = name.split('.');
      setFormData(prev => ({
        ...prev,
        pets: prev.pets.map((pet, i) => {
          if (i === parseInt(index)) {
            return { ...pet, [field]: value };
          }
          return pet;
        })
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Update pets array when numPets changes
  useEffect(() => {
    setFormData(prev => {
      const updatedPets = [...prev.pets];
      if (numPets === 2 && updatedPets.length === 1) {
        updatedPets.push({
          name: '',
          breed: '',
          temperament: '',
          health: '',
          weight: ''
        });
      } else if (numPets === 1 && updatedPets.length === 2) {
        updatedPets.pop();
      }
      return {
        ...prev,
        pets: updatedPets
      };
    });
  }, [numPets]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateForm()) {
      alert('Please fill in all required fields correctly.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare pet 2 data - use NA if only 1 pet selected
      const pet2Data = numPets === 2 ? {
        pet2_name: formData.pets[1].name,
        pet2_breed: formData.pets[1].breed,
        pet2_health: formData.pets[1].health,
        pet2_temperament: formData.pets[1].temperament,
        pet2_weight: formData.pets[1].weight,
        pet2_weight_unit: formData.pets[1].weightUnit,
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
          from_name: formData.passengerName,
          from_email: formData.email,
          phone: formData.phone,
          date: flightDetails.acf.date,
          from_destination: flightDetails.acf.from_destination,
          from_time: flightDetails.acf.from_time,
          to_destination: flightDetails.acf.to_destination,
          to_time: flightDetails.acf.to_time,
          price: formatPrice(flightDetails.acf.price),
          flight_stops: flightDetails.acf.flight_stops,
          num_pets: numPets,
          // Pet 1 details
          pet1_name: formData.pets[0].name,
          pet1_breed: formData.pets[0].breed,
          pet1_health: formData.pets[0].health,
          pet1_temperament: formData.pets[0].temperament,
          pet1_weight: formData.pets[0].weight,
          pet1_weight_unit: formData.pets[0].weightUnit,
          // Pet 2 details
          ...pet2Data,
          reply_to: formData.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert('Thank you for your booking request. We will get back to you soon!');
      navigate('/');
    } catch (error) {
      console.error('Error sending booking:', error);
      alert('Sorry, there was an error submitting your booking. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageContainer>
      <Navbar />
      <Layout>
        <FlightSummary>
        <VectorOverlay src={Vector} alt="" />
          <FlightInfo>
            <FlightDate>
              <CalendarIcon src={calendarIcon} alt="Calendar" />
              <span>{flightDetails ? formatDate(flightDetails.acf.date) : ''}</span>
            </FlightDate>
            <FlightRoute>
              <RouteDisplay>
                <LocationTime>
                  <Time>{flightDetails?.acf.from_time}</Time>
                  <Location>{flightDetails?.acf.from_destination}</Location>
                  <FlightDetails>Duration: {flightDetails?.acf.duration}</FlightDetails>
                </LocationTime>
                <FlightPath>
                  <img src={airplane} alt="Airplane" className="airplane" />
                  <img src={destination} alt="Destination" className="destination" />
                </FlightPath>
                <LocationTime_destination>
                  <Time>{flightDetails?.acf.to_time}</Time>
                  <Location>{flightDetails?.acf.to_destination}</Location>
                  <FlightDetails>{flightDetails?.acf.flight_stops}</FlightDetails>
                </LocationTime_destination>
              </RouteDisplay>
            </FlightRoute>
            <FlightPrice>
              <span>${flightDetails ? formatPrice(flightDetails.acf.price) : ''}</span>
            </FlightPrice>
          </FlightInfo>
        </FlightSummary>

        <BookingForm>
          <form onSubmit={handleSubmit}>
            <FormSection>
              <SectionTitle>Passenger Details</SectionTitle>
              <FormGrid>
                <FormField>
                  <Label>Name</Label>
                  <Input 
                    type="text"
                    placeholder="Full name"
                    name="passengerName"
                    value={formData.passengerName}
                    onChange={handleChange}
                    error={errors.passengerName}
                  />
                  {errors.passengerName && <ErrorText>{errors.passengerName}</ErrorText>}
                </FormField>
                <FormField>
                  <Label>Email ID</Label>
                  <Input 
                    type="email" 
                    name="email"
                    placeholder="Enter Email ID"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                  {errors.email && <ErrorText>{errors.email}</ErrorText>}
                </FormField>
                <FormField>
                  <Label>Phone Number</Label>
                  <Input 
                    type="tel" 
                    name="phone"
                    placeholder="Enter Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                  />
                  {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
                </FormField>
              </FormGrid>
            </FormSection>

            <FormSection>
              <SectionHeader>
                <SectionTitle>Pet Details</SectionTitle>
                <PetCounter>
                  <CounterButton 
                    onClick={() => setNumPets(Math.max(1, numPets - 1))}
                    disabled={numPets === 1}
                  >
                    -
                  </CounterButton>
                  <CounterValue>{numPets}</CounterValue>
                  <CounterButton 
                    onClick={() => setNumPets(Math.min(2, numPets + 1))}
                    disabled={numPets === 2}
                  >
                    +
                  </CounterButton>
                </PetCounter>
              </SectionHeader>
              
              <FormGrid>
                <FormField>
                  <Label>Name</Label>
                  <Input 
                    type="text"
                    placeholder="Pet name"
                    name="pets.0.name"
                    value={formData.pets[0]?.name || ''}
                    onChange={handleChange}
                    error={errors[`pets.0.name`]}
                  />
                  {errors[`pets.0.name`] && <ErrorText>{errors[`pets.0.name`]}</ErrorText>}
                </FormField>
                <FormField>
                  <Label>Breed</Label>
                  <Input 
                    type="text"
                    placeholder="Enter breed name"
                    name="pets.0.breed"
                    value={formData.pets[0]?.breed || ''}
                    onChange={handleChange}
                    error={errors[`pets.0.breed`]}
                  />
                  {errors[`pets.0.breed`] && <ErrorText>{errors[`pets.0.breed`]}</ErrorText>}
                </FormField>
                <FormField>
                  <Label>Temperament</Label>
                  <Select
                    name="pets.0.temperament"
                    value={formData.pets[0]?.temperament || ''}
                    onChange={handleChange}
                    error={errors[`pets.0.temperament`]}
                  >
                    <option value="">Specify the nature of pet</option>
                    {temperamentOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </Select>
                  {errors[`pets.0.temperament`] && <ErrorText>{errors[`pets.0.temperament`]}</ErrorText>}
                </FormField>
              </FormGrid>
            </FormSection>

            <FormSection>
              <FormGrid>
                <FormField>
                  <Label>Health</Label>
                  <Select
                    name="pets.0.health"
                    value={formData.pets[0]?.health || ''}
                    onChange={handleChange}
                    error={errors[`pets.0.health`]}
                  >
                    <option value="">Select health status</option>
                    {healthOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </Select>
                  {errors[`pets.0.health`] && <ErrorText>{errors[`pets.0.health`]}</ErrorText>}
                </FormField>
                <FormField>
                  <Label>Weight</Label>
                  <Select
                    name="pets.0.weight"
                    value={formData.pets[0]?.weight || ''}
                    onChange={handleChange}
                    error={errors[`pets.0.weight`]}
                  >
                    <option value="">Select weight</option>
                    {weightOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </Select>
                  {errors[`pets.0.weight`] && <ErrorText>{errors[`pets.0.weight`]}</ErrorText>}
                </FormField>
              </FormGrid>
            </FormSection>

            {/* Second Pet Details - Only visible when numPets is 2 */}
            <PetFormSection visible={numPets === 2}>
              <SectionHeader>
                <SectionTitle>Second Pet Details</SectionTitle>
              </SectionHeader>
              <FormGrid>
                <FormField>
                  <Label>Name</Label>
                  <Input 
                    type="text"
                    placeholder="Pet name"
                    name="pets.1.name"
                    value={formData.pets[1]?.name || ''}
                    onChange={handleChange}
                    error={errors[`pets.1.name`]}
                  />
                  {errors[`pets.1.name`] && <ErrorText>{errors[`pets.1.name`]}</ErrorText>}
                </FormField>
                <FormField>
                  <Label>Breed</Label>
                  <Input 
                    type="text"
                    placeholder="Enter breed name"
                    name="pets.1.breed"
                    value={formData.pets[1]?.breed || ''}
                    onChange={handleChange}
                    error={errors[`pets.1.breed`]}
                  />
                  {errors[`pets.1.breed`] && <ErrorText>{errors[`pets.1.breed`]}</ErrorText>}
                </FormField>
                <FormField>
                  <Label>Temperament</Label>
                  <Select
                    name="pets.1.temperament"
                    value={formData.pets[1]?.temperament || ''}
                    onChange={handleChange}
                    error={errors[`pets.1.temperament`]}
                  >
                    <option value="">Specify the nature of pet</option>
                    {temperamentOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </Select>
                  {errors[`pets.1.temperament`] && <ErrorText>{errors[`pets.1.temperament`]}</ErrorText>}
                </FormField>
                <FormField>
                  <Label>Health</Label>
                  <Select
                    name="pets.1.health"
                    value={formData.pets[1]?.health || ''}
                    onChange={handleChange}
                    error={errors[`pets.1.health`]}
                  >
                    <option value="">Select health status</option>
                    {healthOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </Select>
                  {errors[`pets.1.health`] && <ErrorText>{errors[`pets.1.health`]}</ErrorText>}
                </FormField>
                <FormField>
                  <Label>Weight</Label>
                  <Select
                    name="pets.1.weight"
                    value={formData.pets[1]?.weight || ''}
                    onChange={handleChange}
                    error={errors[`pets.1.weight`]}
                  >
                    <option value="">Select weight</option>
                    {weightOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </Select>
                  {errors[`pets.1.weight`] && <ErrorText>{errors[`pets.1.weight`]}</ErrorText>}
                </FormField>
              </FormGrid>
            </PetFormSection>
          </form>
        </BookingForm>
        <ButtonContainer>
              <BookButton 
                onClick={handleSubmit} 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Booking...' : 'Book Flight'}
              </BookButton>
            </ButtonContainer>
      </Layout>
    </PageContainer>
  );
};

export default BookingDetailsPage;