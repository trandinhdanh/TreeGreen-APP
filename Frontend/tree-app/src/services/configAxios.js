import axios from "axios";
import { BASE_URL } from "../utils/baseURL";

export const https = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }
  });
  
  // Add a request interceptor
  https.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  
  // Add a response interceptor
  https.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );