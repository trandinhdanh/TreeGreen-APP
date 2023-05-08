import React from 'react';
import { combineReducers } from 'redux';
import productReducer from './products';
import cartReducer from './cart';
// compine user
const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer
});
export default rootReducer;