import styled from 'styled-components';
import { Text } from '../common';

export function PopupInfo({ origin, location }) {
  return (
    <StyledPopupInfo>
      <div>
        First Seen in:
        <br />
        <Text color="#83bf46" fontSize="18px">
          {origin?.name ? origin?.name : 'Unknown'}
        </Text>
      </div>
      <div>
        Last known location:
        <br />
        <Text color="#83bf46" fontSize="18px">
          {location?.name ? location.name : 'Unknown'}
        </Text>
      </div>
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
`;
