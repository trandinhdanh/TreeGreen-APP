import React from 'react';
import { combineReducers } from 'redux';
import productReducer from './products';
import cartReducer from './cart';
import authSlice from './auth/authSlice';
// compine user
const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  auth : authSlice
});
export default rootReducer;