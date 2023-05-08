import { combineReducers } from 'redux';
import listProductReducer from './productList';
const productReducer = combineReducers({
  productList: listProductReducer,
});
export default productReducer;