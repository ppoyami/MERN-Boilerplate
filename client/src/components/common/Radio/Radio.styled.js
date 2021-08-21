import styled from 'styled-components';

import ICON from '../../../images/Form/icon-radio.png';

export const Label = styled.label`
  cursor: pointer;
  margin-right: 5px;
  font-size: 1.3rem;
`;

export const Input = styled.input`
  display: none;
  &:checked + em {
    background-position: right;
  }
`;

export const Em = styled.em`
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-right: 5px;
  transform: translateY(3px);
  background: ${({ theme }) => theme.colors.WHITE} url(${ICON});
  background-repeat: no-repeat;
  background-position: left;
`;
