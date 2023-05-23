import axios from "axios";
import { BASE_URL, getAuthConfig } from "../utils/baseURL";


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

  // create: async (values) => {
    //   try {
      //     const response = await https.post(`/product`,values)
      //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
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
    console.log(values);
    try {
      const response = await axios.delete(BASE_URL + `/product`,values,{
        ...getAuthConfig(),
        'Content-Type': 'multipart/form-data'
      })
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
    getCategory: async () => {
    try {
        const response = await axios.get(BASE_URL + "/category/list");
        return response.data
    } catch (error) {
        console.log(error);      
    }
  },
};
