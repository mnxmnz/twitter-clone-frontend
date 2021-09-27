import { useMemo, useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { logoutAction } from 'reducers/user';

function UserProfile() {
  const actions = useMemo(
    () => [
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
    ],
    [],
  );

  const avatar = useMemo(() => <Avatar>MJ</Avatar>, []);

  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <>
      <CardWrapper actions={actions}>
        <Card.Meta avatar={avatar} title="MinJi" />
      </CardWrapper>
      <ButtonWrapper>
        <Button onClick={onLogout}>Logout</Button>
      </ButtonWrapper>
    </>
  );
}

const CardWrapper = styled(Card)`
  border: none;
  padding: 5px;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export default UserProfile;
