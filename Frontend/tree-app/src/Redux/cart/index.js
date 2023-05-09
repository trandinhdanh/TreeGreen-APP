import { combineReducers } from 'redux';
import listProductCart from './cartList';
const cartReducer = combineReducers({
  cartList: listProductCart,
});
export default cartReducer;