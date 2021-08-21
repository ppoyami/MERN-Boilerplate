import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.GREEN};
  color: ${({ theme }) => theme.colors.WHITE};
  padding: 1.5rem 0;
  display: block;
  width: 100%;
  font-size: 1.5rem;
`;
