import React,{Component} from "react"
import store from "../state/store"

export default class Counter extends Component {

  constructor() {
    super();
    this.state = {
      number: store.getState().number
    };
  }

  componentWillMount() {
    this.unsubscrib = store.subscribe(()=>{
      this.setState({
        number:store.getState().number
      })
    })
  }

  componentWillUnmount() {
    this.unsubscrib();
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