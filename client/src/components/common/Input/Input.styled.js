import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: 1.5rem;
  outline: none;
  border: ${({ theme }) => theme.borders.INPUT};
`;
