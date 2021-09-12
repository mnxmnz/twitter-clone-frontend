import { useState, useCallback } from 'react';
import Head from 'next/head';
import AppLayout from '@components/AppLayout';
import { Form, Input, Checkbox, Button } from 'antd';
import styled from 'styled-components';
import useInput from 'hooks/useInput';

function Signup() {
  const [id, onChangeId] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');

  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const onChangePasswordCheck = useCallback(
    e => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password],
  );

  const [userTerm, setUserTerm] = useState(false);
  const [termError, setTermError] = useState(false);

  const onChangeTerm = useCallback(
    e => {
      setUserTerm(e.target.checked);
      setTermError(false);
    },
    [userTerm],
  );

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (!userTerm) {
      return setTermError(true);
    }
  }, [password, passwordCheck, userTerm]);

  return (
    <AppLayout>
      <Head>
        <title>Twitter || Signup</title>
      </Head>
      <Form onFinish={onSubmit}>
        <InputWrapper>
          <label htmlFor="user-id">이메일</label>
          <br />
          <Input name="user-id" value={id} onChange={onChangeId} required />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="user-nickname">닉네임</label>
          <br />
          <Input name="user-nickname" value={nickname} onChange={onChangeNickname} required />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="user-password-check">비밀번호 확인</label>
          <br />
          <Input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            required
          />
          {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
        </InputWrapper>
        <InputWrapper>
          <Checkbox name="user-term" checked={userTerm} onChange={onChangeTerm}>
            [필수]이용약관 동의
          </Checkbox>
          {termError && <ErrorMessage>이용약관에 동의하지 않으셨습니다.</ErrorMessage>}
        </InputWrapper>
        <Button type="primary" htmlType="submit">
          회원가입
        </Button>
      </Form>
    </AppLayout>
  );
}

const InputWrapper = styled.div`
  margin-bottom: 10px;
`;

const ErrorMessage = styled.div`
  color: red;
`;

export default Signup;
