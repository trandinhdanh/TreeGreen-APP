import { message } from "antd";
import axios from "axios";

const BASE_URL = "http://localhost:8081";

export let authService = {
  registerSeller: async (values) => {
    try {
        const response = await axios.post(BASE_URL + "/auth/register/s",values);
        message.success("Register Success")
        return response.data
    } catch (error) {
        message.error("Register Error")
        console.log(error)   
    }
  },
  registerUser: async (values) => {
    try {
        const response = await axios.post(BASE_URL + "/auth/register/u",values);
        message.success("Register Success")
        return response.data
    } catch (error) {
        message.error("Register Error")
        console.log(error)  
    }
  },
};
