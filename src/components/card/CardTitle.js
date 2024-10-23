import styled from 'styled-components';
import { GenderIcon } from './GenderIcon';

export function CardTitle({ name, gender }) {
  return (
    <CardTitleContainer>
      <CardTitleText>{name}</CardTitleText>
      <GenderIcon gender={gender} />
    </CardTitleContainer>
  );
}

const CardTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CardTitleText = styled.h2`
  margin-right: 8px;
  transition: color 0.3s;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: ${window.screen.width < 450 ? '130px' : '100%'};
  font-size: ${window.screen.width < 450 ? '18px' : '24px'};
`;
