import axios from "axios";
import { store } from "../store";
import { addNotification } from "../store/slices/uiSlice";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1";

// Create Axios instance with default config
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  // timeout: 10000 // 10s timeout
});

// Request Interceptor: Attach Token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Handle Errors (Global 401)
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Handle network errors
    if (!error.response) {
      console.error("Network Error:", error);
      const netErr =
        "Network error - please check your internet connection and try again.";
      store.dispatch(addNotification({ type: "error", message: netErr }));
      throw new Error(netErr);
    }

    // Handle 401 Unauthorized (Session Expired)
    if (error.response.status === 401) {
      const currentPath = window.location.pathname;
      // Prevent infinite loop if already on login
      if (currentPath !== "/login") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        store.dispatch(
          addNotification({
            type: "error",
            message: "Session expired. Please login again.",
          })
        );
        // Redirect to login
        setTimeout(() => {
          window.location.href = "/login?expired=true";
        }, 1500); // Small delay to let toast be seen? Or just redirect immediately.
        // Actually, window.location.href is abrupt. But standard for 401 global handler.
        // Let's just redirect immediately to avoid state mismatch.
        window.location.href = "/login?expired=true";
        return Promise.reject(error); // Prevent further processing
      }
    }

    // Return standardized error object
    const message =
      error.response.data?.message || "An unexpected error occurred";
    // We generally Don't want to toast EVERY error globally because some might be handled locally (like form errors).
    // But for "msg", maybe the user wants global notifications.
    // A common pattern is to toast 500s or generic errors, but let 400s be handled by the form.
    // However, given the request, let's toast if it's not 401 (already handled)
    if (error.response.status >= 500) {
      store.dispatch(addNotification({ type: "error", message }));
    }

    throw new Error(message);
  }
);

// Wrapper object to match previous 'api' signature
export const api = {
  get: (url, config) => axiosInstance.get(url, config),
  post: (url, data, config) => axiosInstance.post(url, data, config),
  put: (url, data, config) => axiosInstance.put(url, data, config),
  patch: (url, data, config) => axiosInstance.patch(url, data, config),
  delete: (url, config) => axiosInstance.delete(url, config),
  // Expose raw instance if needed
  axios: axiosInstance,
};

// --- Registrar Dashboard Services ---
export const fetchRegistrarStats = () => api.get("/registrar/stats");
export const fetchStudents = () => api.get("/registrar/students");
export const fetchComplianceStatus = () => api.get("/registrar/compliance");
export const fetchTransportRoutes = () => api.get("/transport/routes");
