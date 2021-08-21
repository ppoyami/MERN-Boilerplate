import React from 'react';
import * as S from './Header.styled';

import { ROUTE } from '../../constants';

export default function Header() {
  return (
    <S.Header>
      <S.Ul>
        <S.Li to={ROUTE.HOME}>홈</S.Li>
      </S.Ul>
      <S.Ul>
        <S.Li to={ROUTE.LOGIN}>로그인</S.Li>
        <S.Li to={ROUTE.SIGN_UP}>회원가입</S.Li>
      </S.Ul>
    </S.Header>
  );
}
