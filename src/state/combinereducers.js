let combineReducers = (reducers)=> {
  return (state = {}, action)=> {
    let newState = {};
    for(var key in reducers) {
      newState[key] = reducers[key](state[key],action);
    }
    return newState;
  }
}