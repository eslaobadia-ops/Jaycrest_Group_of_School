
import api from "./api.js";

export const login = async (data) => {
  const res = await api.post("/auth/login", data);
  localStorage.setItem("token", res.data.access_token || "");
  return res;
};

export const register = async (data) => {
  return api.post("/auth/register", data);
};
