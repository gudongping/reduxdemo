import {createStore} from '../state/redux'
import reducer from './../state/reducer';

let store = createStore(reducer);

export default store;