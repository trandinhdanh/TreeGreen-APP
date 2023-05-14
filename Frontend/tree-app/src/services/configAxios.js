import axios from 'axios';
import { localStorageService } from './localStorageService';


export const https = axios.create({
  baseURL: "http://localhost:8081",
  headers: {
    Token: localStorageService.get('accessToken'),
  },
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