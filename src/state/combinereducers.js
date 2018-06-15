let combineReducers = (reducers)=> {
  return ({}, action)=> {
    let newState = {};
    for(var key in reducers) {
      newState[key] = reducers[key](state[key],action);
    }
    return newState;
  }
}