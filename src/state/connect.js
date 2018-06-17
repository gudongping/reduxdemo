import React, {Component} from "react"
import {INCREASE, DECREASE} from "../state/actiontypes"
import { PropTypes } from 'prop-types';

let connect = ()=>(_component)=>{
  class Proxy extends Component {
    constructor() {
      super();
      // this.state = mapStateToProps(this.context.store.getState())
      this.state = {value:0}
    }

    componentWillMount() {
      this.unsubscribe = this.context.store.subscribe(()=>{
        this.setState(mapStateToProps(this.context.store.getState()))
      })
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    render() {
      return <_component {...this.state} {...mapDispatchToProps(this.context.store.dispatch)} />
    }
  }

  Proxy.contextTypes = {
    store: PropTypes.object
  }

  return Proxy;
}

let mapStateToProps = (state)=> ({value:state.number})

let mapDispatchToProps = (dispatch) => ({
    onIncrease: ()=>dispatch({type:INCREASE}),
    onDecrease: ()=>dispatch({type:DECREASE})
})

export default connect;