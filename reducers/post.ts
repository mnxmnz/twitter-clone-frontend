import { AnyAction } from 'redux';

export const ADD_POST = 'ADD_POST' as const;

export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: 'MinJi',
      },
      content: '첫 번째 게시글',
      Images: [
        {
          src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
        },
        {
          src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
        },
        {
          src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'User01',
          },
          content: '안녕하세요',
        },
        {
          User: {
            nickname: 'User02',
          },
          content: '임시 댓글 데이터입니다.',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const dummyPost = {
  id: 2,
  content: '임시 포스트 추가 데이터입니다.',
  User: {
    id: 1,
    nickname: 'MinJi',
  },
  Images: [],
  Comments: [],
};

export const addPostAction = () => {
  return {
    type: ADD_POST,
  };
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
