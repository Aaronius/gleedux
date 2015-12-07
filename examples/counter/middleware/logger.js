export default reducer => state => {
  console.group('Action');
  console.log('State before action:', state.toJS());
  let newState = reducer(state);
  console.log('State after action:', newState.toJS());
  console.groupEnd('Action');
  return newState;
};
