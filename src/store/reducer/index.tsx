import { combineReducers } from 'redux';
import cart from './cart';
import { reducer as toastr } from 'react-redux-toastr';

let reducer = combineReducers({ cart, toastr });
export type RootState = ReturnType<typeof reducer>;

export default reducer;
