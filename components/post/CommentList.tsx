import { useCallback } from 'react';
import { List, Comment } from 'antd';
import { PostData } from 'typings';

function CommentList({ post }: PostData) {
  const renderItem = useCallback(item => {
    return <li>{/* <Comment></Comment> */}</li>;
  }, []);

  return (
    <>
      {/* <CommentForm /> */}
      <List
        header={`${post.Comments.length} comments`}
        itemLayout="horizontal"
        dataSource={post.Comments}
        renderItem={renderItem}
      />
    </>
  );
}

export default CommentList;
