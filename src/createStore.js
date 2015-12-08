'use strict';
import Rx from 'rx';

export default initialState => {
  var store = new Rx.BehaviorSubject(initialState);
  let onNext = store.onNext;
  store.onNext = reducer => {
    onNext.call(store, reducer(store.getValue()));
  };
  return store;
};
