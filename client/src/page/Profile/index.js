import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { ROUTE } from '../../constants';

export default function Profile() {
  const [loading, isAuth] = useAuth();
  const history = useHistory();

  const { payload } = useSelector(state => state.user);

  if (!loading && !isAuth) history.push(ROUTE.LOGIN);
  if (!payload?.data?.loggedIn) return null;

  const email = payload.data.user.email;
  const name = payload.data.user.name;
  const birth = payload.data.user.birth;
  const gender = payload.data.user.gender;

  // TODO: 날짜 문자열 파싱해주는 헬퍼함수
  return (
    <div>
      <p>{email}</p>
      <p>{name}</p>
      <p>{birth}</p>
      <p>{gender}</p>
    </div>
  );
}
