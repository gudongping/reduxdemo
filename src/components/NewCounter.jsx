import React, {Component} from "react"
import {INCREASE, DECREASE} from "../state/actiontypes"
// import connect from "../state/connect"
import {connect} from 'react-redux'

class NewCounter extends Component {  
  render() {
    return (
      <div>
        <p>{this.props.value}</p>
        <p>
          <button onClick={this.props.onIncrease}>+</button>
          <button onClick={this.props.onDecrease}>-</button>
        </p>
      </div>
    );
  }
}

let mapStateToProps = (state)=> ({value:state.number})

let mapDispatchToProps = (dispatch) => ({
    onIncrease: ()=>dispatch({type:INCREASE}),
    onDecrease: ()=>dispatch({type:DECREASE})
})

let App = connect(mapStateToProps, {
  onIncrease: function() {
    return {type:INCREASE}
  },
  onDecrease: function() {
    return {type:DECREASE}
  }
})(NewCounter);

export default App