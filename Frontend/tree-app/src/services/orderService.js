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
  order: async (idCart,values) => {
    try {
      const response = await axios.post(BASE_URL + `/api/v1/orders/${idCart}`,values,{
        ...getAuthConfig(),
      })
      console.log(response);
      message.success("Order Success")

    } catch (error) {
      console.log(error);
      message.success("Order error")
    }
  },
};
