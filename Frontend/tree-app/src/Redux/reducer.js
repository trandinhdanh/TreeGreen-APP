import { combineReducers } from 'redux';
import productReducer from './products';
import authSlice from './auth/authSlice';
import loadingSlice from './loading/loadingSlice';
import cartSlice from './cart/cartSlice';
// compine user
const rootReducer = combineReducers({
  products: productReducer,
  auth : authSlice,
  loading : loadingSlice,
  cart : cartSlice
});
export default rootReducer;