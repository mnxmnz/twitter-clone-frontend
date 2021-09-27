import { AnyAction } from 'redux';

export const LOG_IN = 'LOG_IN' as const;
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS' as const;
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE' as const;
export const LOG_OUT = 'LOG_OUT';
export const SIGN_UP = 'SIGN_UP' as const;
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS' as const;

export const initialState = {
  isLoggedIn: false,
  user: null,
  signupData: {},
  signinData: {},
};

const dummyUser = {
  id: 1,
  nickname: 'MinJi',
  Posts: [],
  Followings: [],
  Followers: [],
};

type SigninProps = {
  id: string;
  password: string;
};

export const signinAction = (data: SigninProps) => {
  return {
    type: LOG_IN,
    data,
  };
};

export const logoutAction = () => {
  return {
    type: LOG_OUT,
  };
};

export const signupAction = (data: null) => {
  return {
    type: SIGN_UP,
    data,
  };
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser,
        signinData: action.data,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        signinData: null,
      };
    }
    case SIGN_UP: {
      return {
        ...state,
        signupData: action.data,
      };
    }
    default:
      return state;
  }
};

export default reducer;
