import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { openNotificationIcon } from '../../Components/NotificationIcon/NotificationIcon';
/** State **/
const initialState = {
  items: [],
};

const cartListSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        // nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng lên 1
        existingItem.quantity++;
      } else {
        // nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm mới
        state.items.push({ ...item, quantity: 1 });
      }
      openNotificationIcon('success', 'Success', 'Add Product Success!');
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((i) => i.id !== id);
      openNotificationIcon('success', 'Success', 'Delete Product Success!');
    },
    updateItemQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id);

      if (item) {
        item.quantity = quantity;
      }
      openNotificationIcon('success', 'Success', 'Update Product Success!');

    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity, clearCart } = cartListSlice.actions;
export default cartListSlice.reducer;
