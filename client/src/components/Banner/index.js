import React from 'react';
import * as S from './Banner.styled';

import Portal from '../../hoc/Portal';

export default function Banner({ message, isSuccess, show = false }) {
  return (
    <Portal elementId="banner">
      <S.Banner isSuccess={isSuccess} show={show}>
        <S.Text>{message}</S.Text>
      </S.Banner>
    </Portal>
  );
}
