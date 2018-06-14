import {createStore} from './redux'
import $ from "jquery"

const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

$('body').append(
  `<div>
    <p id="center"></p>
    <button id="increaseBtn">+</button>
    <button id="decreaseBtn">-</button>
  </div>`
);

// state是状态树，可以是任意的结构
// action是一个纯对象，主要是一个类型的对象 如：{type:'increase', amount:1}
let reducer = (state={number:0}, action)=> {
  if(action === undefined) return state;
  switch(action.type) {
    case INCREASE:
      return {number: state.number+1}
    case DECREASE:
      return {number: state.number-1}
    default:
      return state  
  }
}
let store = createStore(reducer);
console.log(store.getState());

let render = ()=> {
  $('#center').html(store.getState().number);
}
render();

$('#increaseBtn').click(function() {
  store.dispatch({type:INCREASE});
});

$('#decreaseBtn').click(function() {
  store.dispatch({type:DECREASE});
});

store.subscribe(render);