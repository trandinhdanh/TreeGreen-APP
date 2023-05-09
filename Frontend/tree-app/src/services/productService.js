import axios from "axios";

const BASE_URL = "http://localhost:8081/product";

export let productService = {
  getAllProduct: async () => {
    try {
        const response = await axios.get(BASE_URL + "/list");
        return response.data
    } catch (error) {
        console.log(error);      
    }
  },
  getProductId: async (id) => { 
    try {
      const response = await axios.get(BASE_URL + `/${id}`);
      return response.data
  } catch (error) {
      console.log(error);      
  }
   }
};
