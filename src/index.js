import React from "react"
import {render} from "react-dom"
import store from "./state/store"
import {Provider} from "react-redux"
import NewCounter from "./components/NewCounter"

// import Counter from "./components/Counter"
// render(<Counter/>, document.getElementById('root')); 

render(
  <Provider store={store}>
    <NewCounter/>
  </Provider>, 
  document.getElementById('root')
);