import axios from "axios";
import { BASE_URL, getAuthConfig } from "../utils/baseURL";


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
  delete: async (id) => { 
    try {
      const response = await axios.put(BASE_URL + `/users/${id}`,{
        ...getAuthConfig(),
      });
      return response.data
  } catch (error) {
      console.log(error);      
  }
  },

};