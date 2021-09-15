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
  signUpData: {},
  loginData: {},
};

const dummyUser = {
  id: 1,
  nickname: 'MinJi',
  Posts: [],
  Followings: [],
  Followers: [],
};

type LogInProps = {
  id: string;
  password: string;
};

export const logInAction = (data: LogInProps) => {
  return {
    type: LOG_IN,
    data,
  };
};

export const logOutAction = () => {
  return {
    type: LOG_OUT,
  };
};

export const signUpAction = (data: null) => {
  return {
    type: SIGN_UP,
    data,
  };
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser,
        loginData: action.data,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        loginData: null,
      };
    }
    case SIGN_UP: {
      return {
        ...state,
        signUpData: action.data,
      };
    }
    default:
      return state;
  }
};
