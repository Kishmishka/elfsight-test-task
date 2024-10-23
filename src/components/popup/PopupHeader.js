import styled from 'styled-components';
import { GenderIcon } from '../card/GenderIcon';

export function PopupHeader({ image, name, gender, status, species, type }) {
  return (
    <PopupHeaderContainer>
      <PopupHeaderImage src={image?.replace('../', '')} alt={name} />
      <PopupHeaderTitle>
        <PopupHeaderTitleText>{name}</PopupHeaderTitleText>
        <GenderIcon gender={gender} />
      </PopupHeaderTitle>
      <PopupHeaderInfo>
        <PopupHeaderStatus status={status}>Status: {status}</PopupHeaderStatus>
        <PopupHeaderSpecies>Species: {species}</PopupHeaderSpecies>
        <PopupHeaderType>Type: {type ? type : '...'}</PopupHeaderType>
      </PopupHeaderInfo>
    </PopupHeaderContainer>
  );
}

const PopupHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 350px;
  justify-content: center;
  align-items: start;
  margin-bottom: 15px;
`;
const PopupHeaderImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 5px;
  object-fit: cover;
  margin-bottom: 15px;
`;
const PopupHeaderTitle = styled.div`
  display: flex;
  font-size: 23px;
  margin-bottom: 15px;
  gap: 7px;
  @media (max-width: 777px) {
    font-size: 19px;
  }
`;
const PopupHeaderInfo = styled.div`
  font-size: 19px;
  @media (max-width: 777px) {
    font-size: 17px;
  }
`;
const PopupHeaderStatus = styled.div`
  display: flex;
  align-items: center;
  &::after {
    content: '';
    display: block;
    margin-left: 8px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: ${({ status }) => {
      switch (status) {
        case 'Alive':
          return '#83bf46';
        case 'Dead':
          return '#ff5152';
        default:
          return '#968c9d';
      }
    }};
  }
`;
const PopupHeaderSpecies = styled.div``;
const PopupHeaderType = styled.div``;
const PopupHeaderTitleText = styled.h2``;
