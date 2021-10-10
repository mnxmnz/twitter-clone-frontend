import { useCallback } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';
import useInput from 'hooks/useInput';
import { useDispatch } from 'react-redux';
import { signinAction } from 'reducers/user';

function SigninForm() {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  const dispatch = useDispatch();
  const onSubmitForm = useCallback(() => {
    dispatch(signinAction({ id, password }));
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
          Sign in
        </Button>
        <Link href="/signup">
          <Button loading={false}>
            <a>Sign up</a>
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

export default SigninForm;
