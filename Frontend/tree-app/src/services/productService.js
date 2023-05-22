import axios from "axios";
import { localStorageService } from "./localStorageService";
import { https } from "./configAxios";
import { BASE_URL } from "../utils/baseURL";


const getAuthConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorageService.get("accessToken")}`
  }
});
export let productService = {
  getAllProduct: async () => {
    try {
        const response = await axios.get(BASE_URL + "/product/list");
        return response.data
    } catch (error) {
        console.log(error);      
    }
  },
  getProductId: async (id) => { 
    try {
      const response = await axios.get(BASE_URL + `/product/${id}`);
      return response.data
  } catch (error) {
      console.log(error);      
  }
  },

  create: async (values) => {
    try {
      const response = await https.post(`/product`,values)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (values) => {
    try {
      const response = await https.delete(`/product`,values)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
};
