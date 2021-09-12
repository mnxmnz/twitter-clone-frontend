import { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import styled from 'styled-components';

type LoginFormProps = {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

function UserProfile({ setIsLoggedIn }: LoginFormProps) {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <>
      <CardWrapper
        actions={[
          <div key="twit">
            Twit
            <br />0
          </div>,
          <div key="followers">
            Followers
            <br />0
          </div>,
          <div key="following">
            Following
            <br />0
          </div>,
        ]}
      >
        <Card.Meta avatar={<Avatar>MJ</Avatar>} title="MinJi" />
      </CardWrapper>
      <ButtonWrapper>
        <Button onClick={onLogOut}>Logout</Button>
      </ButtonWrapper>
    </>
  );
}

const CardWrapper = styled(Card)`
  padding: 5px;
  border: none;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export default UserProfile;
