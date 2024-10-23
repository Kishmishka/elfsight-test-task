import styled from 'styled-components';
import { Select } from './Select';
import { useData } from '../providers';
import { useEffect } from 'react';
import { useState } from 'react';

export function Filter() {
  const { apiURL, setApiURL, setActivePage } = useData();
  const [url, setUrl] = useState(
    new URL('https://rickandmortyapi.com/api/character/')
  );

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

  useEffect(() => {
    setApiURL(url);
  }, [url]);

  return (
    <SortingContainer>
      <SortingInput
        placeholder="name"
        onChange={(event) => {
          url.searchParams.set('name', event.target.value);
          setUrl(new URL(url));
          setActivePage(0);
        }}
      />
      <SortingInput
        placeholder="species"
        onChange={(event) => {
          url.searchParams.set('species', event.target.value);
          setUrl(new URL(url));
          setActivePage(0);
        }}
      />
      <SortingInput
        placeholder="type"
        onChange={(event) => {
          url.searchParams.set('type', event.target.value);
          setUrl(new URL(url));
          setActivePage(0);
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
  justify-content: space-between;
`;

const SortingContainer = styled.div`
  border: 2px solid #263750;
  padding: 15px;
  border-radius: 20px;
  margin-bottom: 20px;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;

const SortingInput = styled.input`
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
`;
