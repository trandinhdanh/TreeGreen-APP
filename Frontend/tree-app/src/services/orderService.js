import axios from "axios";
import { BASE_URL, getAuthConfig } from "../utils/baseURL";


export let orderService = {
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
};
