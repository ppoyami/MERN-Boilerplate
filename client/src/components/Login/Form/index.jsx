import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/modules/user';
import { show } from '../../../store/modules/bannerReducer';

import * as S from './Form.styled';

import Input from '../../common/Input';
import Button from '../../common/Button';
import Checkbox from '../../common/Checkbox';
import { useHistory } from 'react-router';

const defaultValues = {
  email: 'scvd03@naver.com',
  password: '',
};

export default function Form() {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues });

  const dispatch = useDispatch();
  const history = useHistory();

  console.log(errors);

  const onSubmit = data => {
    dispatch(login(data)).then(res =>
      dispatch(show(res.value.data.message, res.value.data.loggedIn))
    );
    history.push('/');
  };

  return (
    <>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Field>
          <Input
            type="email"
            name="email"
            placeholder="아이디"
            control={control}
            rules={{ required: true }}
          />
          {errors.email?.type === 'required' && (
            <small>❗️ 이메일을 입력해주세요</small>
          )}
        </S.Field>
        <S.Field>
          <S.PasswordInput
            name="password"
            type="password"
            placeholder="비밀번호"
            {...register('password', { required: true })}
          />
          {errors.password?.type === 'required' && (
            <small>❗️ 비밀번호를 입력해주세요</small>
          )}
        </S.Field>
        <Button>로그인</Button>
        <S.Left>
          <Checkbox text="로그인 상태 유지" />
        </S.Left>
      </S.Form>
      <S.Br />
      <S.Center>
        <S.SubTitle>더욱 간편한 로그인</S.SubTitle>
      </S.Center>
      <S.FlexContainer></S.FlexContainer>
    </>
  );
}
