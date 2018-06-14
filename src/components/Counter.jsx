import React,{Component} from "react"
import {createStore} from '../state/redux'
import reducer from './../state/reducer';

let store = createStore(reducer);

export default class Counter extends Component {

  constructor() {
    super();
    this.state = {
      number: store.getState().number
    };
  }

  componentWillMount() {
    store.subscribe(()=>{
      this.setState({
        number:store.getState().number
      })
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={()=>{store.dispatch({type:'INCREASE'})}}>+</button>
        <button onClick={()=>{store.dispatch({type:'DECREASE'})}}>-</button>
      </div>
    );
  }
}