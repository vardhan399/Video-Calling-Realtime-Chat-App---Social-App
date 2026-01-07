import axios from "axios";

// ✔ FIXED: use Vite-exposed backend URL instead of MODE/localhost/static path
const BASE_URL = import.meta.env.VITE_API_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});
