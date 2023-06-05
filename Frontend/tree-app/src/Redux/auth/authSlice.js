import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { localStorageService } from '../../services/localStorageService';
import axios from 'axios';
import { openNotificationIcon } from '../../Components/NotificationIcon/NotificationIcon';
import { BASE_URL } from '../../utils/baseURL';
import { redirect } from "react-router-dom";
const initialState = {
  accessToken: null,
  isLoggedIn: !!localStorageService.get('USER'),
  registerSuccess: false,
  isRegisterAccountSuccess: false,
};

//LOGIN
export const loginUser = createAsyncThunk('auth/loginUser', async (user, thunkAPI) => {
    try {
        const res = await axios.post(BASE_URL + `/api/v1/auth/login`, user);
    localStorageService.set('accessToken', res.data.token);
    localStorageService.set('USER', res.data);
    openNotificationIcon('success', 'Success', 'Login Success!');
    console.log(res)
    return res.data;
  } catch (error) {
    openNotificationIcon('erorr', 'Erorr', 'Login Failed!');
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

//LOGOUT
export const logoutUser = createAsyncThunk('auth/logoutUser', async (user, thunkAPI) => {
  try {
    localStorageService.remove('USER')
    localStorageService.remove('accessToken')
    openNotificationIcon('success', 'Success', 'Logout Success!');
    return user;
  } catch (error) {
    openNotificationIcon('erorr', 'Erorr', 'Login Erorr!');
  }
});

//REGISTER
// export const registerUser = createAsyncThunk('auth/registerUser', async (infor, thunkAPI) => {
//   try {
//     const res = await https.post('/api/auth/signup', infor);
//     openNotificationIcon('success', 'Success', 'Register Success!');
//     return res.data;
//   } catch (error) {
//     openNotificationIcon('erorr', 'Erorr', 'Register Failed!');
//     return thunkAPI.rejectWithValue(error.response.data);
//   }
// });


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      return {
        ...state,
      };
    },
  },
  extraReducers: (builder) => {
    return builder
      .addCase(loginUser.pending, (state) => {
        return {
          ...state,
        };
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
          return {
              ...state,
              accessToken: payload.token,
              isLoggedIn: !!payload,
            };
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        return {
          ...state,
          accessToken: payload.token,
          isLoggedIn: false,
        };
      })
      .addCase(logoutUser.pending, (state) => {
        return {
          ...state,
        };
      })
      .addCase(logoutUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoggedIn: false,
        };
      })
  },
});
// Action creators are generated for each case reducer function
export const { reset } = authSlice.actions;

export default authSlice.reducer;