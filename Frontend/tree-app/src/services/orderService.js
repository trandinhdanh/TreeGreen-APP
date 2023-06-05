import axios from "axios";
import { BASE_URL, getAuthConfig } from "../utils/baseURL";
import { message } from "antd";


export let orderService = {
  getOrderByUser : async (idUser) => {
    try {
      const response = await axios.get(BASE_URL + `/api/v1/orders/user/${idUser}`,{
        ...getAuthConfig(),
      })
      console.log(response);
      return response
    } catch (error) {
      console.log(error);
    }
  },
  getOrderBySeller : async (idUser) => {
    try {
      const response = await axios.get(BASE_URL + `/api/v1/orders/seller/${idUser}`,{
        ...getAuthConfig(),
      })
      console.log(response);
      return response
    } catch (error) {
      console.log(error);
    }
  },
  order: async (idCart,values) => {
    try {
      const response = await axios.post(BASE_URL + `/api/v1/orders/${idCart}`,values,{
        ...getAuthConfig(),
      })
      console.log(response);

    } catch (error) {
      console.log(error);
    }
  },
  confirm: async (idOrder) => {
    try {
      const response = await axios.put(BASE_URL + `/api/v1/orders/seller/${idOrder}/status/confirm`,{
        ...getAuthConfig(),
        'Content-Type': 'multipart/form-data'
      })
      console.log(response);
      message.success("Confirm Success")

    } catch (error) {
      console.log(error);
      message.success("Confirm error")
    }
  },
  done: async (idOrder) => {
    try {
      const response = await axios.put(BASE_URL + `/api/v1/orders/seller/${idOrder}/status/done`,{
        ...getAuthConfig(),
        'Content-Type': 'multipart/form-data'
      })
      console.log(response);
      message.success("Confirm Success")

    } catch (error) {
      console.log(error);
      message.success("Confirm error")
    }
  },
  cancel: async (idOrder) => {
    try {
      const response = await axios.put(BASE_URL + `/api/v1/orders/seller/${idOrder}/status/cancel`,{
        ...getAuthConfig(),
        'Content-Type': 'multipart/form-data'
      })
      console.log(response);
      message.success("Confirm Success")

    } catch (error) {
      console.log(error);
      message.success("Confirm error")
    }
  },
  canceluser: async (idOrder) => {
    try {
      const response = await axios.put(BASE_URL + `/api/v1/orders/user/${idOrder}/cancel`,{
        ...getAuthConfig(),
        'Content-Type': 'multipart/form-data'
      })
      console.log(response);

    } catch (error) {
      console.log(error);
    }
  },
  getYear : async (idUser,year) => {
    try {
      const response = await axios.get(BASE_URL + `/api/v1/statisticals/${idUser}/${year}`,{
        ...getAuthConfig(),
      })
      console.log(response);
      return response
    } catch (error) {
      console.log(error);
    }
  },
};
