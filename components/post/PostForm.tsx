import { useCallback, useRef } from 'react';
import { Button, Form, Input } from 'antd';
import styled from 'styled-components';
import useInput from 'hooks/useInput';
import { useSelector, useDispatch } from 'react-redux';
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
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>Upload Image</Button>
        <TwitButton type="primary" htmlType="submit">
          Twit
        </TwitButton>
      </div>
      <div>
        {imagePaths.map(img => (
          <div key={img} style={{ display: 'inline-block' }}>
            <img src={img} style={{ width: '200px' }} alt={img} />
            <div>
              <Button>Delete</Button>
            </div>
          </div>
        ))}
      </div>
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

export default PostForm;
