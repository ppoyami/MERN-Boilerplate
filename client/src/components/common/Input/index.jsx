import React from 'react';
import { useController } from 'react-hook-form';

import * as S from './Input.styled';

export default function Input({ name, control, rules, ...rest }) {
  const { field } = useController({ name, control, rules });

  return <S.Input name={name} {...field} {...rest} />;
}
