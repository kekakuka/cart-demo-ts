import { createStore } from 'redux';
import reducer from './reducer/index';

let index = createStore(reducer);

export default index;
