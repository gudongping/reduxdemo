import React, {Component} from "react"
import PropTypes from "prop-types"

export default class Provider extends Component {
  getChildContext() {
    return {
      store: this.props.store
    }
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Provider.childContextTypes = {
  store:PropTypes.object
}