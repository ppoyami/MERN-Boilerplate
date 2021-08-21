import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;
`;

export const Ul = styled.ul`
  width: 20rem;
  display: flex;
  justify-content: space-between;
`;

export const Li = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.BLACK};
  font-size: 2.5rem;
  font-weight: 300;
`;
