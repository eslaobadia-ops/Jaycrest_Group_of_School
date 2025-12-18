import axios from "axios";

const api = axios.create({
  baseURL: "https://jaycrest1.onrender.com",
});

export default api;

