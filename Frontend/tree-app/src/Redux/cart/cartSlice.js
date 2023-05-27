import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { cartService } from '../../services/cartService';

export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async (userId, { rejectWithValue }) => {
    try {
      const items = await cartService.getCartItems(userId);
      return items;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ userId, productId }) => {
    await cartService.addToCart(userId, productId);
    return productId;
  }
);

export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async ({ userId, productId }) => {
    await cartService.removeFromCart(userId, productId);
    return productId;
  }
);

export const updateCartItemQuantity = createAsyncThunk(
  'cart/updateCartItemQuantity',
  async ({ userId, productId, quantity }) => {
    await cartService.updateCartItemQuantity(userId, productId, quantity);
    return { productId, quantity };
  }
);

const initialState = {
  cartItems: [],
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
        state.cartItems = payload;
        state.loading = false;
      })
      .addCase(fetchCartItems.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(addToCart.fulfilled, (state, { payload }) => {
        state.cartItems.push(payload);
      })
      .addCase(removeFromCart.fulfilled, (state, { payload }) => {
        state.cartItems = state.cartItems.filter(
          (item) => item.productId !== payload
        );
      })
      .addCase(updateCartItemQuantity.fulfilled, (state, { payload }) => {
        const { productId, quantity } = payload;
        const itemIndex = state.cartItems.findIndex(
          (item) => item.productId === productId
        );
        if (itemIndex !== -1) {
          state.cartItems[itemIndex].quantity = quantity;
        }
      });
  },
});

export default cartSlice.reducer;
