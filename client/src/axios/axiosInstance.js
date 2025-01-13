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
    const token = localStorage.getItem("authToken"); // or use a context/state management solution
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;

    }
    console.log(config.headers.Authorization )
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
