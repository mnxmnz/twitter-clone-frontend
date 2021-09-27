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
          src: 'https://cdn.inflearn.com/public/courses/324064/course_cover/037d8ce7-c4d1-4659-9929-b13131db5c3d/node.png',
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
    default:
      return state;
  }
};

export default reducer;
