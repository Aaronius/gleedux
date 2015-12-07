export default (...middlewares) => createStore => initialState => {
  let store = createStore(initialState);
  let onNext = store.onNext;

  store.onNext = reducer => {
    for (var i = middlewares.length - 1; i >= 0; i--) {
      var middleware = middlewares[i];
      reducer = middleware(reducer);
    }
    onNext(reducer);
  };

  return store;
};
