import { AnyAction } from 'redux';
import { UserState, SigninProps } from 'typings';

export const SIGN_IN = 'SIGN_IN' as const;
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS' as const;
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE' as const;
export const LOG_OUT = 'LOG_OUT';
export const SIGN_UP = 'SIGN_UP' as const;
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS' as const;

export const initialState: UserState = {
  isSignin: false,
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

export const signinAction = (data: SigninProps) => {
  return {
    type: SIGN_IN,
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

const reducer = (state: UserState = initialState, action: AnyAction) => {
  switch (action.type) {
    case SIGN_IN: {
      return {
        ...state,
        isSignin: true,
        user: dummyUser,
        signinData: action.data,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        isSignin: false,
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
    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;
