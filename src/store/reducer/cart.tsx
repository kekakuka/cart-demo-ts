import * as TYPES from '../action-type';
import { addToCart, removeFromCart, clearCart } from '../../utils/cartFunctions';

import { getLocalStorageCart, calculateTotalNumbers } from '../../utils/cartFunctions';

interface Action {
  type: string;
  data?: any;
}

export default function cart(
  state = {
    listItems: getLocalStorageCart(),
    total: calculateTotalNumbers(getLocalStorageCart()),
  },
  action: Action
) {
  switch (action.type) {
    case TYPES.ADD_TO_CART:
      {
        const listItems = addToCart(state.listItems, action.data);
        state = { listItems, total: calculateTotalNumbers(listItems) };
      }
      break;
    case TYPES.REMOVE_FROM_CART:
      {
        const listItems = removeFromCart(state.listItems, action.data);

        state = { listItems, total: calculateTotalNumbers(listItems) };
      }
      break;
    case TYPES.CLEAR_CART:
      state = { listItems: clearCart(), total: 0 };
      break;
    default:
      break;
  }
  return state;
}
