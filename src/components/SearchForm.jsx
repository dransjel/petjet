import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 48px;
`;

const InputField = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    color: rgb(61, 61, 61);
  }

  input {
    height: 44px;
    border: 1px solid rgb(199, 199, 199);
    border-radius: 4px;
    padding: 12px;
  }
`;

const SearchForm = styled.div`
  background: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;

  h2 {
    color: rgb(85, 173, 139);
    span {
      color: black;
    }
  }
`;

const SearchFormComponent = () => {
  return (
    <SearchContainer>
      <InputField>
        <label>From</label>
        <input type="text" placeholder="Choose location" />
      </InputField>
      <InputField>
        <label>To</label>
        <input type="text" placeholder="Choose location" />
      </InputField>
      <InputField>
        <label>Date</label>
        <input type="text" placeholder="Select date" />
      </InputField>
    </SearchContainer>
  );
};

export default SearchFormComponent; 