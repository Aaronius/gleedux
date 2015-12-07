export default reducer => state => {
  let reducerName = reducer.name || '';
  let actionLabel = `Action ${reducerName}`;
  console.group(actionLabel);
  console.log('State before action:', state.toJS());
  let newState = reducer(state);
  console.log('State after action:', newState.toJS());
  console.groupEnd(actionLabel);
  return newState;
};
