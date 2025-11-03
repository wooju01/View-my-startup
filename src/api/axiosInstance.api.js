import axios from "axios";

const BASE_URL =
  "https://view-my-startup-be-evkb.onrender.com";

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
