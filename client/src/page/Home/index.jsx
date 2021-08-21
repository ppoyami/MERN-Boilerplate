import React from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
  const state = useSelector(state => state);
  console.log('join', state.join);
  console.log('login', state.login);
  return (
    <>
      <div></div>
    </>
  );
}
