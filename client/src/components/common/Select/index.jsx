import React from 'react';
import { useController } from 'react-hook-form';

import * as S from './Select.styled';

export default function Select({ name, control, rules, children }) {
  const { field } = useController({ name, control, rules });
  return <S.Select {...field}>{children}</S.Select>;
}
