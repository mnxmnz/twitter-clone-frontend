import { useState, useMemo, useCallback } from 'react';
import PostImages from './Images';
import CommentList from './CommentList';
import styled from 'styled-components';
import { Card, Popover, Button, Avatar } from 'antd';
import {
  RetweetOutlined,
  HeartTwoTone,
  HeartOutlined,
  MessageOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { PostData, UserData } from 'typings';

function PostCard({ post }: PostData) {
  const [isLiked, setIsLiked] = useState(false);

  const onToggleLike = useCallback(() => {
    setIsLiked(isLiked => !isLiked);
  }, [isLiked]);

  const [isCommentOpened, setIsCommentOpened] = useState(false);

  const onToggleComment = useCallback(() => {
    setIsCommentOpened(isCommentOpened => !isCommentOpened);
  }, [isCommentOpened]);

  const id = useSelector((state: UserData) => state.user.user?.id);

  const actions = useMemo(
    () => [
      <RetweetOutlined key="retweet" />,
      isLiked ? (
        <HeartTwoTone key="heart" twoToneColor="#EB2F96" onClick={onToggleLike} />
      ) : (
        <HeartOutlined key="heart" onClick={onToggleLike} />
      ),
      <MessageOutlined key="comment" onClick={onToggleComment} />,
      <Popover
        key="more"
        content={
          <Button.Group>
            {id && post.User.id === id ? (
              <>
                <Button>Edit</Button>
                <Button danger>Delete</Button>
              </>
            ) : (
              <Button type="primary" danger>
                Report
              </Button>
            )}
          </Button.Group>
        }
      >
        <EllipsisOutlined />
      </Popover>,
    ],
    [isLiked, isCommentOpened, id],
  );

  const avatar = useMemo(() => <Avatar>{post.User.nickname[0]}</Avatar>, []);

  return (
    <CardWrapper>
      <Card cover={post.Images[0] && <PostImages images={post.Images} />} actions={actions}>
        <Card.Meta avatar={avatar} title={post.User.nickname} description={post.content} />
        {/* <Image />
        <Content />
        <Button></Button> */}
      </Card>
      {isCommentOpened && <CommentList post={post} />}
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  margin: 20px auto;
  max-width: 767px;
`;

export default PostCard;
