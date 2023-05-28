import axios from "axios";
import { BASE_URL, getAuthConfig } from "../utils/baseURL";
import { message } from "antd";


export let blogService = {
  getAllBlog: async () => {
    try {
        const response = await axios.get(BASE_URL + "/api/v1/blogs");
        return response.data
    } catch (error) {
        console.log(error);      
    }
  },
  getBlogById: async (id) => { 
    try {
      const response = await axios.get(BASE_URL + `/api/v1/blogs/${id}`);
      return response.data
  } catch (error) {
      console.log(error);      
  }
  },
  getBlogByShop: async (id) => { 
    try {
      const response = await axios.get(BASE_URL + `/api/v1/blogs/${id}/owner`);
      return response.data
  } catch (error) {
      console.log(error);      
  }
  },
  delete: async (id) => {
    console.log(id);
    try {
      const response = await axios.delete(BASE_URL + `/api/v1/blogs/${id}`, {
        ...getAuthConfig(),
      });
      message.success("Delete Blog Success")
      console.log(response);
    } catch (error) {
      console.log(error);
        message.error("Delete Blog Fail")
    }
  },

  create: async (idUser,values) => {
    try {
      const response = await axios.post(BASE_URL + `/api/v1/blogs/${idUser}`,values,{
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


};
