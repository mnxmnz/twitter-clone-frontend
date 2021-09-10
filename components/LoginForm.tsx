import { useCallback, useState } from 'react';
import Link from 'next/link';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';

type LoginFormProps = {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

function LoginForm({ setIsLoggedIn }: LoginFormProps) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onChangeId = useCallback(e => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback(e => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
    setIsLoggedIn(true);
  }, [id, [password]]);

  return (
    <FromWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">ID</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">Password</label>
        <br />
        <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
          Login
        </Button>
        <Link href="/signup">
          <a>Signup</a>
        </Link>
      </ButtonWrapper>
    </FromWrapper>
  );
}

const FromWrapper = styled(Form)`
  padding: 10px;
`;

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

export default LoginForm;
