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
  },
  deleteProduct : async (ids) => { 
      try{
        const reponse = await axios.delete(BASE_URL , {data : ids});
        console.log('Product deleted successfully');
      }catch(error){
        console.error('Failed to delete product:', error);
      }
   }
};
