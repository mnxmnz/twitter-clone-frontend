import { useCallback } from 'react';
import Link from 'next/link';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import useInput from 'hooks/useInput';
import { useDispatch } from 'react-redux';
import { loginAction } from 'reducers/user';

function LoginForm() {
  const [id, onChangeId] = useInput('');

  const [password, onChangePassword] = useInput('');

  const dispatch = useDispatch();

  const onSubmitForm = useCallback(() => {
    dispatch(loginAction({ id, password }));
  }, [id, password]);

  return (
    <FromWrapper onFinish={onSubmitForm}>
      <InputWrapper>
        <label htmlFor="user-id">E-mail</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="user-password">Password</label>
        <br />
        <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
      </InputWrapper>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
          Login
        </Button>
        <Link href="/signup">
          <Button loading={false}>
            <a>Signup</a>
          </Button>
        </Link>
      </ButtonWrapper>
    </FromWrapper>
  );
}

const FromWrapper = styled(Form)`
  padding: 20px;
`;

const InputWrapper = styled.div`
  margin-bottom: 10px;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export default LoginForm;
