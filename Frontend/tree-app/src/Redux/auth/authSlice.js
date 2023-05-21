import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { localStorageService } from '../../services/localStorageService';
import { https } from '../../services/configAxios';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { openNotificationIcon } from '../../Components/NotificationIcon/NotificationIcon';
import { BASE_URL } from '../../utils/baseURL';

const initialState = {
  accessToken: null,
  isloading: false,
  isLoggedIn: !!localStorageService.get('USER'),
  registerSuccess: false,
  isRegisterAccountSuccess: false,
};

//LOGIN
export const loginUser = createAsyncThunk('auth/loginUser', async (user, thunkAPI) => {
    try {
        const res = await axios.post(BASE_URL + `/auth/login`, user);
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
        isLoading: false,
      };
    },
  },
  extraReducers: (builder) => {
    return builder
      .addCase(loginUser.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
          return {
              ...state,
              isLoading: false,
              accessToken: payload.token,
              isLoggedIn: !!payload,
            };
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          accessToken: payload.token,
          isLoggedIn: false,
        };
      })
      .addCase(logoutUser.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(logoutUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          isLoggedIn: false,
        };
      })
      // .addCase(registerUser.pending, (state) => {
      //   return {
      //     ...state,
      //     isLoading: true,
      //   };
      // })
      // .addCase(registerUser.fulfilled, (state, { payload }) => {
      //   return {
      //     ...state,
      //     isLoading: false,
      //     registerSuccess: true,
      //   };
      // })
      // .addCase(registerUser.rejected, (state, { payload }) => {
      //   return {
      //     ...state,
      //     isLoading: false,
      //     registerSuccess: false,
      //     isRegisterAccountSuccess: true,
      //   };
      // });
  },
});
// Action creators are generated for each case reducer function
export const { reset } = authSlice.actions;

export default authSlice.reducer;