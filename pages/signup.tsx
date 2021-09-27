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
      <FormWrapper onFinish={onSubmit}>
        <InputWrapper>
          <label htmlFor="user-id">E-mail</label>
          <Input name="user-id" value={id} onChange={onChangeId} required />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="user-nickname">Nickname</label>
          <Input name="user-nickname" value={nickname} onChange={onChangeNickname} required />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="user-password">Password</label>
          <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="user-password-check">Check Password</label>
          <Input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            required
          />
          {passwordError && <ErrorMessage>Incorrect password</ErrorMessage>}
        </InputWrapper>
        <InputWrapper>
          <Checkbox name="user-term" checked={userTerm} onChange={onChangeTerm}>
            [Required] I agree to the Terms and Conditions.
          </Checkbox>
          {termError && <ErrorMessage>Please agree to the terms and conditions.</ErrorMessage>}
        </InputWrapper>
        <SignupButtonMargin />
        <SignupButton type="primary" htmlType="submit">
          Sign up
        </SignupButton>
      </FormWrapper>
    </AppLayout>
  );
}

const FormWrapper = styled(Form)`
  margin: 0 auto;
  max-width: 767px;
`;

const InputWrapper = styled.div`
  margin-bottom: 10px;
`;

const ErrorMessage = styled.div`
  color: red;
`;

const SignupButtonMargin = styled.div`
  height: 20px;
`;

const SignupButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 150px;
  height: 40px;
  font-weight: bold;
`;

export default Signup;
