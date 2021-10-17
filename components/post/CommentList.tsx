import { useCallback } from 'react';
import styled from 'styled-components';
import { Form, Input, Button, List, Comment, Avatar } from 'antd';
import useInput from 'hooks/useInput';
import { PostData, UserData } from 'typings';
import { useSelector } from 'react-redux';

function CommentList({ post }: PostData) {
  const id = useSelector((state: UserData) => state.user.user?.id);

  const [commentText, onChangeCommentText] = useInput('');

  const onSubmitComment = useCallback(() => {
    console.log(post.id, id, commentText);
  }, [commentText]);

  const renderItem = useCallback(item => {
    return (
      <li>
        <Comment
          author={item.User.nickname}
          avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
          content={item.content}
        />
      </li>
    );
  }, []);

  return (
    <>
      <Form onFinish={onSubmitComment}>
        <Form.Item>
          <TextAreaWrapper value={commentText} onChange={onChangeCommentText} rows={4} />
          <TwitButton type="primary" htmlType="submit">
            Comment
          </TwitButton>
        </Form.Item>
      </Form>
      <List
        header={`${post.Comments.length} comments`}
        itemLayout="horizontal"
        dataSource={post.Comments}
        renderItem={renderItem}
      />
    </>
  );
}

const TextAreaWrapper = styled(Input.TextArea)`
  margin-top: 20px;
  resize: none;
`;

const TwitButton = styled(Button)`
  float: right;
  margin-top: 20px;
`;

export default CommentList;
