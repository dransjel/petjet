import { useState } from 'react';
import styled from 'styled-components';
import arrowDown from '../assets/images/arrow-down.png';
import calendar from '../assets/images/calendar.png';
import airplane from '../assets/images/airplane.svg';
import destination from '../assets/images/Destination.png';
import searchIcon from '../assets/images/search-normal.svg';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px;
  background: #FFFFFF;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 48px;
`;

const SubTitle = styled.h3`
  font-family: 'Satoshi', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  text-transform: uppercase;
  color: #00252E;
  margin: 0;
`;

const MainTitleContainer = styled.h2`
  font-family: 'Lato';
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  margin: 0;
  display: flex;
  gap: 8px;
`;

const GreenText = styled.span`
  color: #56AC8A;
`;

const BlackText = styled.span`
  color: #00252E;
`;

const SearchForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  width: 1200px;
  margin-bottom: 48px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
`;

const Label = styled.label`
  font-family: 'Satoshi', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #3D3D3D;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border: 1px solid #C7C7C7;
  border-radius: 4px;
  
  span {
    font-family: 'Satoshi', sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: #B5B5B5;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #FFFFFF;
  border: 1px solid #C7C7C7;
  border-radius: 4px;
  padding: 8px;
  z-index: 1000;
`;

const DropdownItem = styled.div`
  padding: 8px;
  cursor: pointer;
  font-family: 'Satoshi', sans-serif;
  font-weight: 500;
  color: #00252E;

  &:hover {
    background: #F5F5F5;
  }
`;

const SearchButton = styled.button`
  width: 54px;
  height: 54px;
  background: #EF674A;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  align-self: flex-end;
  
  img {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background: #e85835;
  }
`;

const FlightsSection = styled.div`
  width: 1200px;
`;

const FlightsTitle = styled.h3`
  font-family: 'Lato';
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #00252E;
  margin-bottom: 24px;
`;

const FlightCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const FlightCard = styled.div`
  width: 588px;
  padding: 20px 24px;
  border: 1px solid #E7E7E7;
  border-radius: 4px;
  box-sizing: border-box;
`;

const FlightInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const TimeLocation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Time = styled.span`
  font-family: 'Lato';
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;

const Location = styled.span`
  font-family: 'Lato';
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #5F5F5F;
`;

const FlightPath = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 24px;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    border-top: 1px dashed #56AC8A;
  }

  .airplane {
    width: 20px;
    height: 20px;
    position: relative;
    z-index: 1;
    margin-left: -400px;
  }

  .destination {
    width: 20px;
    height: 20px;
    position: absolute;
    right: -20px;
    z-index: 1;
  }
`;

const FlightDetails = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Lato';
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #5F5F5F;
`;

const PlanTripButton = styled.button`
  padding: 16px 28px;
  background: #EF674A;
  border-radius: 8px;
  border: none;
  font-weight: 750;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
  cursor: pointer;
  margin-top: 24px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const CalendarDropdown = styled(DropdownMenu)`
  padding: 16px;
  width: 300px;
`;

const Calendar = styled.div`
  .calendar-header {
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
    font-family: 'Satoshi', sans-serif;
    font-weight: 500;
    color: #00252E;
  }

  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 8px;
    text-align: center;
  }

  .day {
    padding: 8px;
    font-family: 'Satoshi', sans-serif;
    font-size: 14px;
    color: #B5B5B5;
    cursor: not-allowed;
  }

  .available {
    color: #00252E;
    cursor: pointer;
    font-weight: 500;
    
    &:hover {
      background: #F5F5F5;
      border-radius: 4px;
    }
  }

  .selected {
    background: #EF674A;
    color: white;
    border-radius: 4px;
  }
`;

const DestinationSection = () => {
  const [fromDropdown, setFromDropdown] = useState(false);
  const [toDropdown, setToDropdown] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const locations = ['London', 'Dubai', 'New York'];
  const availableDate = '7 March 2025';

  const handleLocationSelect = (location, isFrom) => {
    if (isFrom) {
      setFromLocation(location);
      setFromDropdown(false);
    } else {
      setToLocation(location);
      setToDropdown(false);
    }
  };

  const handleDateSelect = () => {
    setSelectedDate(availableDate);
    setCalendarOpen(false);
  };

  return (
    <Section>
      <Title>
        <SubTitle>Flight Check</SubTitle>
        <MainTitleContainer>
          <GreenText>Routes & Dates</GreenText>
          <BlackText>Update</BlackText>
        </MainTitleContainer>
      </Title>
      
      <SearchForm>
        <InputGroup>
          <Label>From</Label>
          <InputWrapper>
            <Input onClick={() => setFromDropdown(!fromDropdown)}>
              <span>{fromLocation || 'Choose location'}</span>
              <img src={arrowDown} alt="Select location" />
            </Input>
            {fromDropdown && (
              <DropdownMenu>
                {locations.map((location) => (
                  <DropdownItem
                    key={location}
                    onClick={() => handleLocationSelect(location, true)}
                  >
                    {location}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            )}
          </InputWrapper>
        </InputGroup>
        
        <InputGroup>
          <Label>To</Label>
          <InputWrapper>
            <Input onClick={() => setToDropdown(!toDropdown)}>
              <span>{toLocation || 'Choose location'}</span>
              <img src={arrowDown} alt="Select location" />
            </Input>
            {toDropdown && (
              <DropdownMenu>
                {locations.map((location) => (
                  <DropdownItem
                    key={location}
                    onClick={() => handleLocationSelect(location, false)}
                  >
                    {location}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            )}
          </InputWrapper>
        </InputGroup>
        
        <InputGroup>
          <Label>Date</Label>
          <InputWrapper>
            <Input onClick={() => setCalendarOpen(!calendarOpen)}>
              <span>{selectedDate || 'Select date'}</span>
              <img src={calendar} alt="Select date" />
            </Input>
            {calendarOpen && (
              <CalendarDropdown>
                <Calendar>
                  <div className="calendar-header">March 2025</div>
                  <div className="calendar-grid">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                      <div key={index} className="day">{day}</div>
                    ))}
                    {Array.from({ length: 31 }, (_, i) => (
                      <div 
                        key={i}
                        className={`day ${i + 1 === 7 ? 'available' : ''} ${selectedDate && i + 1 === 7 ? 'selected' : ''}`}
                        onClick={i + 1 === 7 ? handleDateSelect : undefined}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </Calendar>
              </CalendarDropdown>
            )}
          </InputWrapper>
        </InputGroup>
        
        <SearchButton>
          <img src={searchIcon} alt="Search flights" />
        </SearchButton>
      </SearchForm>

      <FlightsSection>
        <FlightsTitle>Upcoming Flights</FlightsTitle>
        <FlightCards>
          {[1, 2, 3, 4].map((_, index) => (
            <FlightCard key={index}>
              <FlightInfo>
                <TimeLocation>
                  <Time>06:00</Time>
                  <Location>LGW</Location>
                </TimeLocation>
                
                <FlightPath>
                  <img className="airplane" src={airplane} alt="Flight path" />
                  <img className="destination" src={destination} alt="Destination" />
                </FlightPath>
                
                <TimeLocation>
                  <Time>08:15</Time>
                  <Location>DXB</Location>
                </TimeLocation>
              </FlightInfo>
              
              <FlightDetails>
                <span>Duration: 01d 18h 05m</span>
                <span>2 Stop: Istanbul (IST) & Mumbai (BOB)</span>
              </FlightDetails>
            </FlightCard>
          ))}
        </FlightCards>
        
        <PlanTripButton>Plan Your Trip</PlanTripButton>
      </FlightsSection>
    </Section>
  );
};

export default DestinationSection;
