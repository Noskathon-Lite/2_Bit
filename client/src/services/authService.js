// Function to handle login

import axiosInstance from "./axiosInstance";
import { useAuth } from "../context/AuthContext";

const { setUser } = useAuth();

export const login = (email, password) => {
    return axiosInstance
      .post("/auth/login", { email, password }) // Replace with your login endpoint
      .then((response) => {
        const { token, user } = response.data;
        localStorage.setItem("authToken", token); // Store the token
        setUser(user); // Set the user in the context
      });
  };

  // Function to handle logout
  export const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null); // Clear the user state
  };