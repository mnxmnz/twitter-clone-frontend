import { applyMiddleware, createStore, compose, Store } from 'redux';
import { createWrapper, Context } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'reducers/index';

const configureStore = (context: Context) => {
  console.log(context);

  const middlewares = [] as any;

  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(reducer, enhancer);

  return store;
};

const wrapper = createWrapper<Store>(configureStore as any, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
