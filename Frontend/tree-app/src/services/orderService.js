import axios from "axios";
import { BASE_URL, getAuthConfig } from "../utils/baseURL";
import { message } from "antd";


export let orderService = {
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
