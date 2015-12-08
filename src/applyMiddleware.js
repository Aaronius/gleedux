'use strict';
export default (...middlewares) => createStore => initialState => {
  let store = createStore(initialState);
  let onNext = store.onNext;

  store.onNext = reducer => {
    reducer = middlewares.reduce((previousReducer, middleware) => {
      return middleware(previousReducer);
    }, reducer);
    onNext(reducer);
  };

  return store;
};
