import styled from 'styled-components';
import { Text } from '../common';

export function PopupInfo({ origin, location }) {
  return (
    <StyledPopupInfo>
      <PopupInfoContainer>
        First Seen in:
        <TextDecoration>
          {origin?.name ? origin?.name : 'Unknown'}
        </TextDecoration>
      </PopupInfoContainer>
      <PopupInfoContainer>
        Last known location:
        <TextDecoration>
          {location?.name ? location.name : 'Unknown'}
        </TextDecoration>
      </PopupInfoContainer>
    </StyledPopupInfo>
  );
}

const StyledPopupInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 19px;
  margin-bottom: 20px;
  @media (max-width: 777px) {
    font-size: 17px;
  }
`;
const TextDecoration = styled.div`
  color: #83bf46;
  font-size: '18px';
  @media (max-width: 777px) {
    font-size: 16px;
  }
`;
const PopupInfoContainer = styled.div``;
