import { localStorageService } from "../services/localStorageService";

export const BASE_URL = "http://localhost:8081"
export const getAuthConfig = () => ({
    headers: {
      Authorization: `Bearer ${localStorageService.get('accessToken')}`
    }
  });