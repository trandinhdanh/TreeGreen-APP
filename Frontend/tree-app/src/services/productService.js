import axios from "axios";
import { BASE_URL, getAuthConfig } from "../utils/baseURL";
import { message } from "antd";


export let productService = {
  getAllProduct: async () => {
    try {
        const response = await axios.get(BASE_URL + "/api/v1/products");
        return response.data
    } catch (error) {
        console.log(error);      
    }
  },
  getProductId: async (id) => { 
    try {
      const response = await axios.get(BASE_URL + `/api/v1/products/${id}`);
      return response.data
  } catch (error) {
      console.log(error);      
  }
  },
  getProductByShop: async (userName) => { 
    try {
      const response = await axios.get(BASE_URL + `/api/v1/products/shop/${userName}`);
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
  create: async (idUser,values) => {
    try {
      const response = await axios.post(BASE_URL + `/api/v1/products/${idUser}`,values,{
        ...getAuthConfig(),
        'Content-Type': 'multipart/form-data'
      })
      message.success("Create Product Success")
      console.log(response);
    } catch (error) {
      message.error("Create Product Error")
      console.log(error);
    }
  },
  update: async (id,values) => {
    try {
      const response = await axios.put(BASE_URL + `/api/v1/products/${id}`,values,{
        ...getAuthConfig(),
        'Content-Type': 'multipart/form-data'
      })
      message.success("Create Product Success")
      console.log(response);
    } catch (error) {
      message.error("Create Product Error")
      console.log(error);
    }
  },
delete: async (values) => {
  console.log(values);
  try {
    const response = await axios.delete(BASE_URL + `/api/v1/products`, {
      ...getAuthConfig(),
      data: values, 
    });
    message.success("Delete Product Success")
    console.log(response);
  } catch (error) {
    console.log(error);
      message.success("Create Product Success")
      message.error("Delete Product Fail")
  }
},
    getCategory: async () => {
    try {
        const response = await axios.get(BASE_URL + "/api/v1/categorys");
        return response.data
    } catch (error) {
        console.log(error);      
    }
  },
};
