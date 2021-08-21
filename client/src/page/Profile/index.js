import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {
  const {
    payload: { data },
  } = useSelector(state => state.user);

  if (!data.loggedIn) return null;

  const email = data.user.email;
  const name = data.user.name;
  const birth = data.user.birth;
  const gender = data.user.gender;

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
