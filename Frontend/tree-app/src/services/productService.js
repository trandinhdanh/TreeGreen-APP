import axios from "axios";
import { localStorageService } from "./localStorageService";
import { https } from "./configAxios";
import { BASE_URL } from "../utils/baseURL";


const getAuthConfig = () => ({
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaW5oZGFuaHMiLCJpYXQiOjE2ODQ3NDIwNDAsImV4cCI6MTY4NDc0MzQ4MH0.rSJeNZocRTJvPiNOrHNR1HXU5mJt4w77hV6IzPtTFB8`
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
      const response = await axios.post(BASE_URL + `/product`,values,{
        ...getAuthConfig(),
        'Content-Type': 'multipart/form-data'
      })
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
