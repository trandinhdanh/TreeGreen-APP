import axios from "axios";
import { BASE_URL, getAuthConfig } from "../utils/baseURL";
import { message } from "antd";


export let categoryService = {
    getCategory: async () => {
    try {
        const response = await axios.get(BASE_URL + "/api/v1/categorys");
        return response.data
    } catch (error) {
        console.log(error);      
    }
  },
  
  create: async (value) => {
    try {
      const response = await axios.post(BASE_URL + `/api/v1/categorys`,value,{
        ...getAuthConfig(),
      })
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
  edit: async (id,value) => {
    try {
      const response = await axios.put(BASE_URL + `/api/v1/categorys/${id}`,value,{
        ...getAuthConfig(),
      })
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
};
