import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { join } from '../../../store/modules/joinReducer';
import { show } from '../../../store/modules/bannerReducer';

import * as S from './Form.styled';

import Input from '../../common/Input';
import Label from '../../common/Label';
import Button from '../../common/Button';
import Select from '../../common/Select';
import Radio from '../../common/Radio';

const months = new Array(12).fill(0).map((_, i) => i + 1);

const defaultValues = {
  email: 'scvd03@naver.com',
  password: '12345',
  confirmPassword: '12345',
  name: '홍당무',
  year: '1998',
  month: '4',
  day: '8',
  gender: '선택안함',
};

export default function Form() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({ defaultValues });

  const genders = watch('gender');
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = data => {
    dispatch(join(data)).then(res =>
      dispatch(show(res.value.data.message, res.value.data.success))
    );
    history.push('/');
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Field>
        <Label>아이디</Label>
        <Input name="email" control={control} rules={{ required: true }} />
        {errors.email?.type === 'required' && (
          <small>❗️이메일을 입력해주세요.</small>
        )}
      </S.Field>
      <S.Field>
        <Label>비밀번호</Label>
        <S.PasswordInput
          name="password"
          type="password"
          {...register('password', { required: true })}
        />
        {errors.password?.type === 'required' && (
          <small>❗비밀번호를 입력해주세요.</small>
        )}
      </S.Field>
      <S.Field>
        <Label>비밀번호 재확인</Label>
        <S.PasswordCheckInput
          name="confirmPassword"
          type="password"
          {...register('confirmPassword', { required: true })}
        />
      </S.Field>
      <S.Field>
        <Label>이름</Label>
        <Input name="name" control={control} rules={{ required: true }} />
        {errors.name?.type === 'required' && (
          <small>❗️이름을 입력해주세요.</small>
        )}
      </S.Field>
      <S.Field>
        <Label>생년월일</Label>
        <S.Column>
          <Input
            placeholder="년(4자)"
            name="year"
            control={control}
            rules={{ required: true }}
          />
          <Select name="month" control={control}>
            {months.map(month => (
              <option key={month} value={month}>
                {month}월
              </option>
            ))}
          </Select>
          <Input
            placeholder="일"
            name="day"
            control={control}
            rules={{ required: true }}
          />
        </S.Column>
        {errors.year?.type === 'required' && (
          <small>❗️년도를 입력해주세요.</small>
        )}
        {errors.month?.type === 'required' && (
          <small>❗️월을 입력해주세요.</small>
        )}
        {errors.day?.type === 'required' && (
          <small>❗️일자를 입력해주세요.</small>
        )}
      </S.Field>
      <S.Field>
        <Label>성별</Label>
        <S.RadioContainer>
          <Radio text="남자" name="gender" value="남자" control={control} />
          <Radio text="여자" name="gender" value="여자" control={control} />
          <Radio
            checked={genders === '선택안함'}
            text="선택안함"
            value="선택안함"
            name="gender"
            control={control}
          />
        </S.RadioContainer>
      </S.Field>
      <Button>가입하기</Button>
    </S.Form>
  );
}
