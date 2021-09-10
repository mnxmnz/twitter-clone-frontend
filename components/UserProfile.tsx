import { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';

type LoginFormProps = {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

function UserProfile({ setIsLoggedIn }: LoginFormProps) {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <Card
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
      <Button onClick={onLogOut}>Logout</Button>
    </Card>
  );
}

export default UserProfile;
