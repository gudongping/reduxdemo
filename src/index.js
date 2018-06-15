import React from "react"
import {render} from "react-dom"
/* import Counter from "./components/Counter"

render(<Counter/>, document.getElementById('root')); */

class AAA extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <BBB color={this.props.color} />
  }
}

class BBB extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={color}>BBB</div>
    );
  }
}

let color = {color: 'blue'}
render(<AAA color = {color}/>, document.getElementById('root'));