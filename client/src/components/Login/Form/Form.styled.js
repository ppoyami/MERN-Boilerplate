import styled from 'styled-components';

import * as S from '../../common/Input/Input.styled';

import LOCK1 from '../../../images/Form/lock01.png';
import LOCK2 from '../../../images/Form/lock02.png';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const PasswordInput = styled(S.Input)`
  background: ${({ theme }) => theme.colors.WHITE} url(${LOCK1});
  background-repeat: no-repeat;
  background-position: center right 15px;
  background-size: 20px;
`;

export const PasswordCheckInput = styled(S.Input)`
  background: ${({ theme }) => theme.colors.WHITE} url(${LOCK2});
  background-repeat: no-repeat;
  background-position: center right 15px;
  background-size: 20px;
`;

export const Field = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1rem;

  & > small {
    display: inline-block;
    margin-top: 0.5rem;
    font-size: 1.1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.FAIL};
  }
`;

export const RadioContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.GRAY_300};
  background-color: ${({ theme }) => theme.colors.WHITE};
  padding: 1.5rem;
`;

export const FlexContainer = styled.div`
  position: relative;
  display: flex;
`;

export const Left = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 1rem 0;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Column = styled.div`
  display: flex;
  margin-bottom: 1rem;

  & > * {
    flex: 1;
  }
  & > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const Br = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.GRAY_300};
  margin-bottom: 3rem;
`;
