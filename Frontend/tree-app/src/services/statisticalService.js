import axios from "axios";
import { BASE_URL, getAuthConfig } from "../utils/baseURL";

export let statisticalService = {
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
