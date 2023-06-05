import { message } from "antd";
import axios from "axios";
import { BASE_URL } from "../utils/baseURL";
import { openNotificationIcon } from "../Components/NotificationIcon/NotificationIcon";

export let authService = {
  registerSeller: async (values) => {
    try {
        const response = await axios.post(BASE_URL + "/api/v1/auth/register/s",values);
        openNotificationIcon('success', 'Success', 'Resgister Success!');
        return response.data
    } catch (error) {
      openNotificationIcon('error', 'Error', 'Resgister Error!');
      console.log(error)   
    }
  },
  registerUser: async (values) => {
    try {
        const response = await axios.post(BASE_URL + "/api/v1/auth/register/u",values);
        openNotificationIcon('success', 'Success', 'Resgister Success!');
        return response.data
    } catch (error) {
      openNotificationIcon('error', 'Error', 'Resgister Error!');
        console.log(error)  
    }
  },
};
