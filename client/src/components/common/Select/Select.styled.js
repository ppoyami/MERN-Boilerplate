import styled from 'styled-components';

import ICON from '../../../images/Form/select.png';

export const Select = styled.select`
  width: 100%;
  padding: 1.5rem;
  outline: none;
  border: ${({ theme }) => theme.borders.INPUT};

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: ${({ theme }) => theme.colors.WHITE};
  background-image: url(${ICON});
  background-repeat: no-repeat;
  background-size: 1.3rem;
  background-position: center right 1rem;
`;
