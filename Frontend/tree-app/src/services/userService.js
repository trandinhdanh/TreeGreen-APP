import axios from "axios";
import { BASE_URL, getAuthConfig } from "../utils/baseURL";
import { message } from "antd";


export let userService = {
  getByRole: async (role) => {
    try {
        const response = await axios.get(BASE_URL + `/api/v1/users/${role}`,{
            ...getAuthConfig(),
          });
        return response.data
    } catch (error) {
        console.log(error);      
    }
  },
  update: async (userName,values) => {
    try {
      const response = await axios.put(BASE_URL + `/api/v1/users/profile/${userName}`,values,{
        ...getAuthConfig(),
        'Content-Type': 'multipart/form-data'
      })
      message.success("Suscces. Please Login Again!!!")
      console.log(response);
    } catch (error) {
      message.error("Fail")
      console.log(error);
    }
  },
  lock: async (id) => { 
    try {
      const response = await axios.put(BASE_URL + `/api/v1/users/${id}/0`,{
        ...getAuthConfig(),
      });
      return response.data
  } catch (error) {
      console.log(error);    
      message.error("error")  
  }
  },
  unlock: async (id) => { 
    try {
      const response = await axios.put(BASE_URL + `/api/v1/users/${id}/1`,{
        ...getAuthConfig(),
      });
      return response.data
  } catch (error) {
      console.log(error);    
      message.error("error")  
  }
  },
  changePassword: async (value) => { 
    try {
      const response = await axios.put(BASE_URL + `/api/v1/users/password`,value,{
        ...getAuthConfig(),
      });
      return response.data
  } catch (error) {
      console.log(error);    
      message.error("error")  
  }
  },

};
