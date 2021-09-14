import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers, AnyAction } from 'redux';

import user from './user';
import post from './post';

const rootReducer = combineReducers({
  index: (state = {}, action: AnyAction) => {
    switch (action.type) {
      case HYDRATE:
        console.log('HYDRATE', action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
