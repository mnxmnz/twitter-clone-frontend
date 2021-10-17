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
          src: 'https://cdn.pixabay.com/photo/2017/02/22/04/00/dog-2088426_960_720.jpg',
        },
        {
          src: 'https://cdn.pixabay.com/photo/2019/05/10/13/21/husky-4193503_960_720.jpg',
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

export const addPostAction = {
  type: ADD_POST,
};

const reducer = (state = initialState, action: AnyAction) => {
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

export default reducer;
