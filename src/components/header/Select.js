import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import arrowUp from '../../assets/icons/arrow-up.svg';
import arrowDown from '../../assets/icons/arrow-down.svg';

export function Select({ items, placeholder, onChange }) {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(placeholder);
  const selectRef = useRef();

  const handleMisClick = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setActive(false);
    }
  };

  useEffect(() => {
    if (typeof onChange === 'function') {
      onChange(selected, placeholder);
    }
  }, [selected]);

  useEffect(() => {
    document.addEventListener('mousedown', handleMisClick);
    return () => {
      document.removeEventListener('mousedown', handleMisClick);
    };
  }, []);

  return (
    <SelectContainer ref={selectRef}>
      <SelectHeader
        selected={selected}
        placeholder={placeholder}
        active={active}
        onClick={() => {
          setActive((active) => !active);
        }}
      >
        <SelectCurrent>{selected}</SelectCurrent>
        <SelectIcon width={'20px'} src={active ? arrowDown : arrowUp} />
      </SelectHeader>
      <SelectBody active={active}>
        {items.map((item, i) => (
          <SelectItem
            onClick={() => setSelected(item === 'none' ? placeholder : item)}
            key={i}
          >
            {item}
          </SelectItem>
        ))}
      </SelectBody>
    </SelectContainer>
  );
}

const SelectBody = styled.div`
  transition: 0.1s;
  display: ${({ active }) => (active ? 'block' : 'none')};
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  background-color: #263750;
  border: 2px solid #83bf46;
  border-radius: 0 0 5px 5px;
  border-top: none;
  z-index: 2;
`;
const SelectContainer = styled.div`
  min-width: 122px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  position: relative;
  color: white;
  background-color: #263750;
  cursor: pointer;
`;
const SelectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  transition: 0.1s;
  border: 2px solid #83bf46;
  border-radius: ${({ active }) => (active ? '5px 5px 0 0' : '5px')};
  padding: 5px 10px;
  position: relative;
  color: ${({ selected, placeholder }) =>
    selected === placeholder ? '#757575' : 'white'};
  &:hover {
    border: 2px solid #a8f65a;
  }
`;
const SelectItem = styled.div`
  padding: 5px 10px;
  transition: 0.3s;
  &:hover {
    background-color: #2f4464;
  }
`;
const SelectCurrent = styled.span``;
const SelectIcon = styled.img``;
