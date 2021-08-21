import React from 'react';

import * as S from './Checkbox.styled';

export default function CheckBox({ text }) {
  return (
    <S.Wrapper>
      <S.Checkbox type="checkbox" />
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  );
}
