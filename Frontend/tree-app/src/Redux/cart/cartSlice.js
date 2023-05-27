import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { cartService } from '../../services/cartService';
import { message } from 'antd';

export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async (userId, { rejectWithValue }) => {
    try {
      const items = await cartService.getAllCart(userId);
      return items;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ userId, productId, quantity }) => {
    try {
  const response = await cartService.addToCart(userId, productId, quantity);
  console.log(response);
  return response
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async ({ userId, productId }) => {
    try {
      await cartService.deleteToCart(userId, productId);
      return productId;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const updateQuantity = createAsyncThunk(
  'cart/updateQuantity',
  async ({ userId, productId, quantity }) => {
    try {
      await cartService.updateToCart(userId, productId, quantity);
      return { productId, quantity };
    } catch (error) {
      throw new Error(error);
    }
  }
);

const initialState = {
  cart: [], 
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCartItems.fulfilled, (state, { payload }) => {
        state.cart = payload; // Sửa tại đây
        state.loading = false;
      })
      .addCase(fetchCartItems.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, { payload }) => {
        console.log(payload)
        const updatedCartItems = [...state.cart.cartItems, payload.data];
        console.log(updatedCartItems);
        state.cart = { ...state.cart, cartItems: updatedCartItems };
        state.loading = false;
      })
      .addCase(addToCart.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      })
      .addCase(removeFromCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
    
.addCase(removeFromCart.fulfilled, (state, { payload }) => {
    const updatedCartItems = state.cart.cartItems.filter((item) => item.productId !== payload);
    state.cart = { ...state.cart, cartItems: updatedCartItems };
    state.loading = false;
  })
      .addCase(removeFromCart.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      })
      .addCase(updateQuantity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateQuantity.fulfilled, (state, { payload }) => {
        const { productId, quantity } = payload;
        const updatedCartItems = state.cart.cartItems.map((item) => {
          if (item.productId === productId) {
            return { ...item, quantity: quantity };
          }
          return item;
        });
        state.cart = { ...state.cart, cartItems: updatedCartItems };
        state.loading = false;
      })
      .addCase(updateQuantity.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      });
  },
});

export const { reset } = cartSlice.actions;

export default cartSlice.reducer;
