import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';
import { PostImgData } from 'typings';

function PostImages({ images }: PostImgData) {
  const [showImagesZoom, setShowImagesZoom] = useState(false);

  const onZoom = useCallback(() => {
    setShowImagesZoom(showImagesZoom => !showImagesZoom);
  }, [showImagesZoom]);

  if (images.length === 1) {
    return (
      <ImgContent>
        <UserImg role="presentation" width="100%" src={images[0].src} alt={images[0].src} onClick={onZoom} />
      </ImgContent>
    );
  }

  if (images.length === 2) {
    return (
      <ImgContent>
        <UserImg role="presentation" width="50%" src={images[0].src} alt={images[0].src} onClick={onZoom} />
        <UserImg role="presentation" width="50%" src={images[1].src} alt={images[1].src} onClick={onZoom} />
      </ImgContent>
    );
  }

  return (
    <ImgContent>
      <UserImg role="presentation" width="50%" src={images[0].src} alt={images[0].src} onClick={onZoom} />
      <MoreImg role="presentation" onClick={onZoom}>
        <PlusOutlined />
        <br />
        {images.length - 1} more images
      </MoreImg>
    </ImgContent>
  );
}

const ImgContent = styled.div`
  display: flex;
  justify-content: center;
  background-color: #cccccc;
`;

const UserImg = styled.img`
  object-fit: contain;
`;

const MoreImg = styled.div`
  margin: auto;
  cursor: pointer;
  width: 50%;
  text-align: center;
`;

export default PostImages;
