import axios from "axios";
import { getAccessToken, getCurrentRole, setAccessToken, setCurrentRole } from "./tokenService";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true, 
});

// Attach access token to every request
api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const REFRESH_ENDPOINTS = {
  Admin: "/admin/refresh",
  HR: "/hr/refresh",
  Employee: "/employees/refresh",
};

const getRefreshUrl = (role) => REFRESH_ENDPOINTS[role] || null;

const redirectToLogin = () => {
  setAccessToken(null);
  setCurrentRole(null);
  localStorage.removeItem("role");
  window.location.href = "/login";
};

const handleTokenRefresh = async (originalRequest) => {
  const role = getCurrentRole() || localStorage.getItem("role");
  const refreshUrl = getRefreshUrl(role);

  if (!refreshUrl) {
    redirectToLogin();
    throw new Error("Unknown role");
  }

  try {
    const response = await api.get(refreshUrl);
    const { accessToken: newToken, user } = response.data;

    if (!newToken || !user?.role) {
      throw new Error("Invalid token or user data");
    }

    setAccessToken(newToken);
    setCurrentRole(user.role);

    originalRequest.headers.Authorization = `Bearer ${newToken}`;
    return api(originalRequest);
  } catch (error) {
    redirectToLogin();
    throw error;
  }
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/login") &&
      !originalRequest.url.includes("/refresh")
    ) {
      originalRequest._retry = true;
      return handleTokenRefresh(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default api;
