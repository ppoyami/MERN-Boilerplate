import React from 'react';
import { useController } from 'react-hook-form';

import * as S from './Radio.styled';

export default function Radio({ name, control, text, ...rest }) {
  const { field } = useController({ name, control });

  return (
    <S.Label>
      <S.Input type="radio" {...field} {...rest} />
      <S.Em></S.Em>
      {text}
    </S.Label>
  );
}
