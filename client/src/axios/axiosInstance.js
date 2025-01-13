import axios from "axios";

// Create an Axios instance with default settings
const axiosInstance = axios.create({
  baseURL: "http://localhost:8000", // Replace with your API URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Optionally, intercept requests to add the auth token
axiosInstance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("authToken"); // or use a context/state management solution
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzgyOTIzNzJlNDVlMGExZTQ1NzA4MmEiLCJpYXQiOjE3MzY2MTA1NzF9.XA5mKz0tavp1buGTLGHnuisDRXsIBRxPfwIHJgCkQJg";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;