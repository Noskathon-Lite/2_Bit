// Function to handle login

import axiosInstance from "../axios/axiosInstance";
import { useAuth } from "../context/AuthContext";

export const login = ({ email, password }) => {
  // console.log(request);

  // console.log(request);
  return axiosInstance
    .post("/auth/login", { email, password }) // Replace with your login endpoint
    .then((response) => {
      // const { setUser } = useAuth();
      // const { token, user } = response.data;
      const token = response.data.result.token;

      localStorage.setItem("authToken", token); // Store the token
      setUser(user); // Set the user in the context
    });
};

// Function to handle logout
export const logout = () => {
  const { setUser } = useAuth();
  localStorage.removeItem("authToken");
  setUser(null); // Clear the user state
};

export const getUser = () => {
  const { setUser } = useAuth();
  // Get the user from the context
  axiosInstance.get("/auth/me").then((response) => {
    console.log(response.data);
    setUser(response.data);
    return response.data;
  });
};
