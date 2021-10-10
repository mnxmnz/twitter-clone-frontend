import { useRef, useCallback } from 'react';
import styled from 'styled-components';
import { Form, Button, Input } from 'antd';
import useInput from 'hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'reducers/index';
import { addPostAction } from 'reducers/post';

function PostForm() {
  const [text, onChangeText] = useInput('');

  const imageInput = useRef<HTMLInputElement>(null);
  const onClickImageUpload = useCallback(() => {
    if (imageInput.current) imageInput.current.click();
  }, [imageInput.current]);

  const dispatch = useDispatch();
  const onSubmit = useCallback(() => {
    dispatch(addPostAction);
  }, []);

  const { imagePaths } = useSelector((state: RootState) => state.post);

  return (
    <FromWrapper encType="multipart/form-data" onFinish={onSubmit}>
      <TextAreaWrapper
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="어떤 일이 있었나요?"
      />
      <input type="file" multiple hidden ref={imageInput} />
      <Button onClick={onClickImageUpload}>Upload Image</Button>
      <TwitButton type="primary" htmlType="submit">
        Twit
      </TwitButton>
      {imagePaths.map(img => (
        <ImgWrapper key={img}>
          <UserUploadImg src={img} alt={img} />
          <Button>Delete</Button>
        </ImgWrapper>
      ))}
    </FromWrapper>
  );
}

const FromWrapper = styled(Form)`
  margin: 0 auto;
  max-width: 767px;
`;

const TextAreaWrapper = styled(Input.TextArea)`
  margin-bottom: 20px;
  resize: none;
`;

const TwitButton = styled(Button)`
  float: right;
`;

const ImgWrapper = styled.div`
  display: inline-block;
`;

const UserUploadImg = styled.img`
  width: 200px;
`;

export default PostForm;
