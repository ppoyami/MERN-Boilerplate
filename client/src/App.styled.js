import styled from 'styled-components';

export const App = styled.div`
  padding: 0 1rem;
  min-width: 35rem;
`;

export const Main = styled.main`
  max-width: 140rem;
  margin: 0 auto;
  padding: 2rem 0;
  margin-top: 7rem;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
`;
