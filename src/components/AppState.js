import styled from 'styled-components';
import { Loader } from './common';
import { useData } from './providers';

export function AppState() {
  const { isFetching, isError } = useData();

  if (isError) {
    return (
      <AppStateContainer>
        An error has occurred. Try other search parameters.
      </AppStateContainer>
    );
  }

  if (isFetching) {
    return (
      <AppStateContainer>
        <Loader />
      </AppStateContainer>
    );
  }

  return null;
}

const AppStateContainer = styled.div`
  color: white;
  font-size: 22px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 777px) {
    font-size: 17px;
  }
  text-align: center;
`;
