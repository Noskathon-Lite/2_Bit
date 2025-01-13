import axios from "axios";

// Create an Axios instance with default settings
const axiosInstance = axios.create({
  baseURL: "http://localhost:8050", // Replace with your API URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Optionally, intercept requests to add the auth token
axiosInstance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("authToken"); // or use a context/state management solution
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Nzg0OGNkYmFhNGJjM2Y4NGRkNDYwYzQiLCJpYXQiOjE3MzY3NDAxNzZ9.-mPnHn2twLiOyRdCiqbYuFHcPKJl9wE2kihwE18dOlY.XA5mKz0tavp1buGTLGHnuisDRXsIBRxPfwIHJgCkQJg";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;

    }
    console.log(config.headers.Authorization )
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
