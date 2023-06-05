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
      console.log(response);
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
      message.success("Create Blogs Success")
      console.log(response);
    } catch (error) {
      message.error("Create Blogs Error")
      console.log(error);
    }
  },
  update: async (id,values) => {
    try {
      const response = await axios.put(BASE_URL + `/api/v1/blogs/${id}`,values,{
        ...getAuthConfig(),
        'Content-Type': 'multipart/form-data'
      })
      message.success("Update Blogs Success")
      console.log(response);
    } catch (error) {
      message.error("Update Blogs Error")
      console.log(error);
    }
  },


};
