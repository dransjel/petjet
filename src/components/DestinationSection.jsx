import styled from 'styled-components';

const DestinationSection = styled.div`
  width: 100%;
  height: 930px;
  background: #FFFFFF;
  padding: 120px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const HeaderFrame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

const SubHeading = styled.p`
  color: #002530;
  text-align: center;
`;

const MainTitle = styled.h2`
  font-size: 48px;
  text-align: center;
`;

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
`;

const InputLabel = styled.label`
  color: #3D3D3D;
  font-size: 14px;
`;

const StyledInput = styled.div`
  height: 44px;
  border: 1px solid #C7C7C7;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  cursor: pointer;

  span {
    color: #B5B5B5;
  }
`;

const SearchButton = styled.button`
  width: 54px;
  height: 44px;
  background: #EF674C;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
`;

function DestinationSectionComponent() {
  return (
    <DestinationSection>
      <HeaderFrame>
        <SubHeading>FLIGHT CHECK</SubHeading>
        <MainTitle>Routes & Dates Update</MainTitle>
      </HeaderFrame>
      <SearchContainer>
        <InputGroup>
          <InputLabel>From</InputLabel>
          <StyledInput>
            <span>Choose location</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="#EF674C">
              <path d="M16.6 7.4L10 14L3.4 7.4L4.8 6L10 11.2L15.2 6L16.6 7.4Z"/>
            </svg>
          </StyledInput>
        </InputGroup>
        <InputGroup>
          <InputLabel>To</InputLabel>
          <StyledInput>
            <span>Choose location</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="#EF674C">
              <path d="M16.6 7.4L10 14L3.4 7.4L4.8 6L10 11.2L15.2 6L16.6 7.4Z"/>
            </svg>
          </StyledInput>
        </InputGroup>
        <InputGroup>
          <InputLabel>Date</InputLabel>
          <StyledInput>
            <span>Select date</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="#EF674C">
              <path d="M16.6 7.4L10 14L3.4 7.4L4.8 6L10 11.2L15.2 6L16.6 7.4Z"/>
            </svg>
          </StyledInput>
        </InputGroup>
        <SearchButton>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M21.7 20.3L18 16.6C19.3 15 20 13 20 11C20 6.6 16.4 3 12 3C7.6 3 4 6.6 4 11C4 15.4 7.6 19 12 19C14 19 16 18.3 17.6 17L21.3 20.7C21.5 20.9 21.7 21 22 21C22.3 21 22.5 20.9 22.7 20.7C23.1 20.3 23.1 19.7 21.7 20.3ZM6 11C6 7.7 8.7 5 12 5C15.3 5 18 7.7 18 11C18 14.3 15.3 17 12 17C8.7 17 6 14.3 6 11Z"/>
          </svg>
        </SearchButton>
      </SearchContainer>
    </DestinationSection>
  );
}

export default DestinationSectionComponent; 