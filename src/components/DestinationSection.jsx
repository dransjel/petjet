import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import arrowDown from '../assets/images/arrow-down.png';
import calendar from '../assets/images/calendar.png';
import airplane from '../assets/images/airplane.svg';
import destination from '../assets/images/Destination.png';
import searchIcon from '../assets/images/search-normal.svg';
import { devices } from '../styles/breakpoints';
import { useNavigate } from 'react-router-dom';

const Section = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px;
  background: #FFFFFF;

  ${devices.mobile} {
    padding: 40px 20px;
  }
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

  ${devices.mobile} {
    font-size: 32px;
    line-height: 38px;
    flex-direction: column;
    gap: 4px;
  }
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

  ${devices.mobile} {
    width: 100%;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 32px;
  }
`;

const LocationGroup = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;

  @media (min-width: 769px) {
    display: contents; // This will make it behave as if the wrapper doesn't exist on desktop
  }

  ${devices.mobile} {
    flex-direction: row;
    gap: 12px;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;

  @media (min-width: 769px) {
    width: 384px; // Fixed width for desktop
  }

  ${devices.mobile} {
    flex: 1;
    width: auto;
  }
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
  width: 100%;
`;

const Input = styled.div`
  width: 100%;
  height: 56px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #E5E5E5;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  
  span {
    color: #5F5F5F;
    font-size: 16px;
  }

  img {
    width: 24px;
    height: 24px;
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

  ${devices.mobile} {
    align-self: stretch;
    width: 100%;
  }
`;

const FlightsSection = styled.div`
  width: 1200px;

  ${devices.mobile} {
    width: 100%;
  }
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

  ${devices.mobile} {
    flex-direction: column;
    gap: 16px;
  }
`;

const FlightCard = styled.div`
  width: 588px;
  padding: 20px 24px;
  border: 1px solid #E7E7E7;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: pointer;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: #EF674A;
  }

  ${devices.mobile} {
    width: 100%;
    padding: 16px;
  }
`;

const FlightInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;


const FlightRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TimeLocation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Date = styled.div`
  font-family: 'Lato';
  font-size: 24px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Day = styled.div`
  font-family: 'Lato';
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;


const Time = styled.span`
  font-family: 'Lato';
  font-weight: 700;
  font-size: 18px;
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
    margin-left: -350px;
  }

  .destination {
    width: 20px;
    height: 20px;
    position: absolute;
    right: -20px;
    z-index: 1;
  }

  ${devices.mobile} {
    margin: 0 24px;
    
    .airplane {
      margin-left: -150px;
    }

    .destination {
      right: -15px;
    }
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

  ${devices.mobile} {
    flex-direction: row;
    gap: 4px;
    justify-content: space-between;
  }
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

  ${devices.mobile} {
    width: 100%;
    margin-top: 32px;
  }
`;

const CalendarDropdown = styled(DropdownMenu)`
  padding: 16px;
  width: 300px;

  ${devices.mobile} {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 300px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    z-index: 1001;
  }
`;

const Calendar = styled.div`
  .calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    font-family: 'Satoshi', sans-serif;
    font-weight: 500;
    color: #00252E;
  }

  .month-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    text-align: center;
  }

  .month {
    padding: 12px;
    font-family: 'Satoshi', sans-serif;
    font-size: 14px;
    color: #B5B5B5;
    cursor: not-allowed;
    border-radius: 4px;

    &.available {
      color: #00252E;
      cursor: pointer;
      font-weight: 500;
      
      &:hover {
        background: #F5F5F5;
      }
    }

    &.selected {
      background: #EF674A;
      color: white;
    }
  }
`;

const Overlay = styled.div`
  display: none;
  
  ${devices.mobile} {
    display: ${props => props.show ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }
`;

const BookFlightButton = styled.button`
  padding: 16px 28px;
  background: #EF674A;
  border-radius: 8px;
  border: none;
  font-weight: 750;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
  cursor: pointer;
  width: 100%;
  margin-top: 8px;
  display: ${props => props.show ? 'block' : 'none'};
  
  &:hover {
    background: #e85835;
  }
`;

const DestinationSection = () => {
  const navigate = useNavigate();
  const [fromDropdown, setFromDropdown] = useState(false);
  const [toDropdown, setToDropdown] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [currentYear, setCurrentYear] = useState(2025);
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayCount, setDisplayCount] = useState(4);
  const [selectedFlightId, setSelectedFlightId] = useState(null);

  const locations = ['London', 'Dubai', 'New York'];
  const availableMonths = ['March', 'April', 'May', 'June'];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const isMonthAvailable = (month) => {
    return availableMonths.includes(month);
  };

  const getToLocations = (fromLocation) => {
    switch(fromLocation) {
      case 'Dubai':
        return ['London'];
      case 'New York':
        return ['London'];
      case 'London':
        return ['Dubai', 'New York'];
      default:
        return ['London', 'Dubai', 'New York'];
    }
  };

  const handleLocationSelect = (location, isFrom) => {
    if (isFrom) {
      setFromLocation(location);
      setFromDropdown(false);
      
      // Auto-clear 'to' location when 'from' changes
      setToLocation('');
      
      // If Dubai or New York is selected, automatically set London as destination
      if (location === 'Dubai' || location === 'New York') {
        setToLocation('London');
      }
    } else {
      setToLocation(location);
      setToDropdown(false);
    }
  };

  const handleMonthSelect = (month) => {
    if (isMonthAvailable(month)) {
      setSelectedMonth(`${month} ${currentYear}`);
      setCalendarOpen(false);
    }
  };

  const handleYearChange = (increment) => {
    setCurrentYear(prev => prev + increment);
  };

  const resetFilters = () => {
    setFromLocation('');
    setToLocation('');
    setSelectedMonth('');
    setFromDropdown(false);
    setToDropdown(false);
    setCalendarOpen(false);
    setDisplayCount(4); // Reset the number of displayed flights
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  const fetchFlights = async () => {
    try {
      const response = await fetch('http://wordpress.grysolle.com/wp-json/wp/v2/flights?per_page=100', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        console.error('Response status:', response.status);
        console.error('Response statusText:', response.statusText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Fetched flights:', data); // Debug log
      setFlights(data);
      setLoading(false);
    } catch (error) {
      console.error('Error details:', error); // Detailed error logging
      setError(`Failed to fetch flights: ${error.message}`);
      setLoading(false);
    }
  };

  // Filter and sort flights
  const filteredFlights = flights
    .filter(flight => {
      // Filter by month if selected
      if (selectedMonth && flight.acf.month !== selectedMonth.split(' ')[0]) {
        return false;
      }

      // Filter by from location if selected
      if (fromLocation && flight.acf.from_destination !== fromLocation) {
        return false;
      }

      // Filter by to location if selected
      if (toLocation && flight.acf.to_destination !== toLocation) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      try {
        const monthOrder = {
          'January': 1, 'February': 2, 'March': 3, 'April': 4,
          'May': 5, 'June': 6, 'July': 7, 'August': 8,
          'September': 9, 'October': 10, 'November': 11, 'December': 12
        };

        const parseDate = (dateStr) => {
          const [day, month, year] = dateStr.replace(',', '').split(' ');
          return {
            day: parseInt(day),
            month: monthOrder[month],
            year: parseInt(year)
          };
        };

        const dateA = parseDate(a.acf.date);
        const dateB = parseDate(b.acf.date);

        if (dateA.year !== dateB.year) return dateA.year - dateB.year;
        if (dateA.month !== dateB.month) return dateA.month - dateB.month;
        return dateA.day - dateB.day;
      } catch (error) {
        console.error('Error sorting dates:', error, 'for dates:', a.acf.date, b.acf.date);
        return 0;
      }
    });

  const displayedFlights = filteredFlights.slice(0, displayCount);
  const hasMoreFlights = filteredFlights.length > displayCount;

  const handleShowMore = () => {
    setDisplayCount(prevCount => prevCount + 4);
  };

  const handleFlightClick = (flightId) => {
    setSelectedFlightId(selectedFlightId === flightId ? null : flightId);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  const handleBooking = (flight, e) => {
    e.preventDefault(); // Prevent any default behavior
    e.stopPropagation(); // Stop event bubbling
    
    // Convert flight title to URL-friendly format and navigate
    const urlTitle = flight.title.rendered.toLowerCase().replace(/\s+/g, '-');
    navigate(`/booking/${urlTitle}`, { state: { flightDetails: flight } });
  };

  return (
    <Section>
      <Overlay show={calendarOpen} onClick={() => setCalendarOpen(false)} />
      
      <Title>
        <SubTitle>Flight Check</SubTitle>
        <MainTitleContainer>
          <GreenText>Routes & Dates</GreenText>
          <BlackText>Update</BlackText>
        </MainTitleContainer>
      </Title>
      
      <SearchForm>
        <LocationGroup>
          <InputGroup>
            <Label>From</Label>
            <InputWrapper>
              <Input onClick={() => setFromDropdown(!fromDropdown)}>
                <span>{fromLocation || 'Choose location'}</span>
                <img src={arrowDown} alt="Select location" />
              </Input>
              {fromDropdown && (
                <DropdownMenu>
                  {['London', 'Dubai', 'New York'].map((location) => (
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
                  {getToLocations(fromLocation).map((location) => (
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
        </LocationGroup>
        
        <InputGroup>
          <Label>Month</Label>
          <InputWrapper>
            <Input onClick={() => setCalendarOpen(!calendarOpen)}>
              <span>{selectedMonth || 'Select month'}</span>
              <img src={calendar} alt="Select month" />
            </Input>
            {calendarOpen && (
              <CalendarDropdown>
                <Calendar>
                  <div className="calendar-header">
                    <button onClick={() => handleYearChange(-1)}>&lt;</button>
                    <span>{currentYear}</span>
                    <button onClick={() => handleYearChange(1)}>&gt;</button>
                  </div>
                  <div className="month-grid">
                    {months.map((month) => (
                      <div 
                        key={month}
                        className={`month ${
                          isMonthAvailable(month) ? 'available' : ''
                        } ${selectedMonth === `${month} ${currentYear}` ? 'selected' : ''}`}
                        onClick={() => handleMonthSelect(month)}
                      >
                        {month}
                      </div>
                    ))}
                  </div>
                </Calendar>
              </CalendarDropdown>
            )}
          </InputWrapper>
        </InputGroup>
        
        <SearchButton onClick={resetFilters}>
          <img src={searchIcon} alt="Search flights" />
        </SearchButton>
      </SearchForm>

      <FlightsSection>
        <FlightsTitle>Upcoming Flights</FlightsTitle>
        <FlightCards>
          {loading ? (
            <div>Loading flights...</div>
          ) : error ? (
            <div>{error}</div>
          ) : filteredFlights.length === 0 ? (
            <div>No flights available for the selected filters</div>
          ) : (
            displayedFlights.map((flight) => (
              <FlightCard 
                key={flight.id}
                onClick={() => handleFlightClick(flight.id)}
              >
                <FlightInfo>
                  <Day>{flight.acf.date}</Day>
                  <FlightRow>
                    <TimeLocation>
                      <Time>{flight.acf.from_time}</Time>
                      <Location>{flight.acf.from_destination}</Location>
                    </TimeLocation>
                    
                    <FlightPath>
                      <img className="airplane" src={airplane} alt="Flight path" />
                      <img className="destination" src={destination} alt="Destination" />
                    </FlightPath>
                    
                    <TimeLocation>
                      <Time>{flight.acf.to_time}</Time>
                      <Location>{flight.acf.to_destination}</Location>
                    </TimeLocation>
                  </FlightRow>
                </FlightInfo>
                
                <FlightDetails>
                  <span>Duration: {flight.acf.duration}</span>
                  <span>Price: ${formatPrice(flight.acf.price)}</span>
                </FlightDetails>
                <FlightDetails>
                  <span>{flight.acf.flight_stops}</span>
                  {parseInt(flight.acf.remaining_tickets) < 6 && (
                    <span>Seats available: {flight.acf.remaining_tickets}</span>
                  )}
                </FlightDetails>

                <BookFlightButton 
                  show={selectedFlightId === flight.id}
                  onClick={(e) => handleBooking(flight, e)}
                >
                  Book This Flight
                </BookFlightButton>
              </FlightCard>
            ))
          )}
        </FlightCards>
        
        {hasMoreFlights && (
          <PlanTripButton onClick={handleShowMore}>
            Show More
          </PlanTripButton>
        )}
      </FlightsSection>
    </Section>
  );
};

export default DestinationSection;
