import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../store/modules/user';
import { show } from '../../store/modules/bannerReducer';
import * as S from './Header.styled';
import { ROUTE } from '../../constants';
import { useHistory } from 'react-router';

export default function Header() {
  const { payload } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onClick = () => {
    dispatch(logout()).then(res => {
      dispatch(show(res.value.data.message, res.value.data.success));
    });
    history.push('/');
  };
  return (
    <S.Header>
      <S.Ul>
        <S.Li to={ROUTE.HOME}>홈</S.Li>
      </S.Ul>
      <S.Ul>
        {payload?.data?.loggedIn
          ? [
              <S.Liel key="로그아웃" onClick={onClick}>
                로그아웃
              </S.Liel>,
              <S.Li key="프로필" to={ROUTE.PROFILE}>
                프로필
              </S.Li>,
            ]
          : [
              <S.Li key="로그인" to={ROUTE.LOGIN}>
                로그인
              </S.Li>,
              <S.Li key="회원가입" to={ROUTE.SIGN_UP}>
                회원가입
              </S.Li>,
            ]}
      </S.Ul>
    </S.Header>
  );
}
