import styled from 'styled-components';
import { Select } from './Select';
import { useData } from '../providers';
import { useEffect } from 'react';
import { useState } from 'react';

export function Filter() {
  const { apiURL, setApiURL, setActivePage } = useData();
  const [url, setUrl] = useState(new URL(apiURL));

  function handleSelect(status, defaulValue) {
    if (status !== defaulValue) {
      url.searchParams.set(defaulValue, status);
      setUrl(new URL(url));
    } else {
      url.searchParams.delete(defaulValue);
      setUrl(new URL(url));
    }
    setActivePage(0);
  }

  function handleInput(event, query) {
    url.searchParams.set(query, event.target.value);
    setUrl(new URL(url));
    setActivePage(0);
  }

  useEffect(() => {
    setApiURL(url);
  }, [url]);

  return (
    <SortingContainer>
      <SortingInput
        placeholder="name"
        onChange={(event) => {
          handleInput(event, 'name');
        }}
      />
      <SortingInput
        placeholder="species"
        onChange={(event) => {
          handleInput(event, 'species');
        }}
      />
      <SortingInput
        placeholder="type"
        onChange={(event) => {
          handleInput(event, 'type');
        }}
      />
      <SelectContainer>
        <Select
          items={['none', 'alive', 'dead', 'unknown']}
          placeholder={'status'}
          onChange={handleSelect}
        />
        <Select
          items={['none', 'female', 'male', 'genderless', 'unknown']}
          placeholder={'gender'}
          onChange={handleSelect}
        />
      </SelectContainer>
    </SortingContainer>
  );
}
const SelectContainer = styled.div`
  margin-left: 15px;
  display: flex;
  gap: 15px;
  justify-content: space-evenly;
  @media (max-width: 777px) {
    width: 100%;
    margin-left: 0;
  }
`;

const SortingContainer = styled.div`
  min-width: 300px;
  border: 2px solid #263750;
  padding: 15px;
  border-radius: 20px;
  margin-bottom: 20px;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  @media (max-width: 777px) {
    width: 100%;
    flex-direction: column;
  }
  @media (max-width: 490px) {
  }
`;

const SortingInput = styled.input`
  width: 25%;
  border: 2px solid #83bf46;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  padding: 5px 10px;
  color: white;
  background-color: #263750;
  transition: 0.3s;
  &:focus {
    border: 2px solid #a8f65a;
  }
  @media (max-width: 777px) {
    width: 100%;
  }
`;
