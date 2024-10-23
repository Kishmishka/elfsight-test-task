import styled from 'styled-components';

export function CardStatus({ status, species, className }) {
  return (
    <CardStatusContainer className={className}>
      <StyledCardStatus status={status}>status: {status}</StyledCardStatus>
      <CardSpecies>Species: {species}</CardSpecies>
    </CardStatusContainer>
  );
}

const CardStatusContainer = styled.div`
  font-size: 17px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const StyledCardStatus = styled.span`
  display: flex;
  align-items: center;
  text-transform: capitalize;

  &::after {
    content: '';
    display: block;
    margin-left: 8px;
    width: 9px;
    height: 9px;
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

const CardSpecies = styled.span``;

const CardType = styled.p`
  margin-top: 20px;
  width: 100%;
  color: #ddd;
  font-size: 16px;
`;
