import axios from 'axios';

// Base URL resolution:
// 1. Explicit environment variable: VITE_API_BASE_URL (e.g. https://kevalon-backend.onrender.com/api)
// 2. Production default: '/api' (relative path, works seamlessly on Render unified deployment)
// 3. Development default: 'http://localhost:5000/api'
const getBaseURL = () => {
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL;
  }
  if (import.meta.env.PROD) {
    return '/api';
  }
  return 'http://localhost:5000/api';
};

const api = axios.create({
  baseURL: getBaseURL(),
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An unexpected network error occurred';
    console.error('[API Error]:', message);
    return Promise.reject(new Error(message));
  }
);

export default api;
