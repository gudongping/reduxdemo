// 创建仓库
export const createStore = (reducer) => {
  // 状态
  let state;
  // 监听函数数组
  let listeners = [];

  // 用来获取最新的状态
  let getState = ()=>state;
  // 想仓库发送action
  let dispatch = (action) => {
    // 传入老的state和action，返回新的state
    state = reducer(state,action);
    // 通知所有监听者
    listeners.forEach(listener=>listener());
  };

  dispatch();
  // 订阅仓库内的状态变化事件，当状态变化之后，会调用对应的订阅函数
  let subscribe = (listener)=> {
    listeners.push(listener);
    return ()=>{
      listeners = listeners.filter(l=>listener!==l);
    }
  }

  return {
    getState, // 获取最新的状态对象
    subscribe, // 订阅状态变化事件
    dispatch
  }
}

let logger = store => next => action => {
  console.log('before dispatch...');
  next(action)
  console.log('after dispatch...');
}

let thunk = store => next => action => {
  if(typeof action === 'function') {
    action(next);
  } else {
    next(action);  
  }
}

let isPromise = (obj)=>obj.then

let promise = store => next =>action => {
  if(isPromise(action)) {
    action.then((data)=>{
      next(data)
    })
  } else {
    next(action)
  }
}

let applyMiddleware = (middleware)=> {
  return (createStore)=>reducer=>{
    let store = createStore(reducer);
    middleware = middleware(store);
    let dispath = middleware(store.dispatch);
    return {
      ...store,
      dispatch
    }
  }
}

// let finalCreateStore = applyMiddleware(logger)
let store = applyMiddleware(logger)(createStore)(reducer);
store.dispatch({type:'ADD'});
// thunk
store.dispatch(function(dispatch) {
  setTimeout(function() {
    dispatch({type:'ADD'})
  }, 3000);
});
// promise
store.dispatch(new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve({type:'ADD'});
  },3000)
}));