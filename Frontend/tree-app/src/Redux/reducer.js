import { combineReducers } from 'redux';
import productReducer from './products';
import authSlice from './auth/authSlice';
import loadingSlice from './loading/loadingSlice';
// compine user
const rootReducer = combineReducers({
  products: productReducer,
  auth : authSlice,
  loading : loadingSlice
});
export default rootReducer;