// import {createStore} from '../state/redux'
import {createStore} from "redux"
import reducer from './../state/reducer';

let store = createStore(reducer);

export default store;