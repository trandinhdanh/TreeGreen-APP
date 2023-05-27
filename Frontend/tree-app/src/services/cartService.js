import axios from "axios";
import { BASE_URL, getAuthConfig } from "../utils/baseURL";
import { openNotificationIcon } from "../Components/NotificationIcon/NotificationIcon";


export let cartService = {
  getAllCart: async (idUser) => { 
    try {
      const response = await axios.get(BASE_URL + `/api/v1/carts/${idUser}`,{
        ...getAuthConfig(),
      });
      return response.data
  } catch (error) {
      console.log(error);      
  }
  },

  addToCart: async (idUser,idProduct,quantity) => {
    try {
      const response = await axios.post(BASE_URL + `/api/v1/carts/item/${idUser}/${idProduct}/${quantity}`,{
        ...getAuthConfig(),
      })
      openNotificationIcon('success', 'Success', 'Add Product Success!');
      console.log(response);
      return response.data
    } catch (error) {
      openNotificationIcon('error', 'Error', 'Failed to add product to cart!');
      console.log(error);
    }
  },
  updateToCart: async (idUser,idProduct,quantity) => {
    try {
      const response = await axios.put(BASE_URL + `/api/v1/carts/item/${idUser}/${idProduct}/${quantity}`,{
        ...getAuthConfig(),
      })
      console.log(response);
      return response.data
    } catch (error) {
      console.log(error);
    }
  },
  deleteToCart: async (idUser,idProduct) => {
    try {
      const response = await axios.delete(BASE_URL + `/api/v1/carts/item/${idUser}/${idProduct}`,{
        ...getAuthConfig(),
      })
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
  deleteAll: async (idUser) => {
    try {
      const response = await axios.delete(BASE_URL + `/api/v1/api/carts/item/${idUser}`,{
        ...getAuthConfig(),
        'Content-Type': 'multipart/form-data'
      })
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
};
