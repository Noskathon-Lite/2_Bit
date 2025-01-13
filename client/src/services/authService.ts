import axiosInstance from "../axios/axiosInstance";
import { UserType } from "../types/UserType";

// Define the shape of the login parameters
interface LoginParams {
  email: string;
  password: string;
}

// Function to handle login
export const login = ({ email, password }: LoginParams): Promise<string> => {
  return axiosInstance
    .post("/auth/login", { email, password }) // Replace with your login endpoint
    .then((response) => {
      const token: string = response.data.result.token;

      localStorage.setItem("authToken", token); // Store the token
      return token;
    });
};

// Function to handle logout
export const logout = (): void => {
  localStorage.removeItem("authToken"); // Clear the user state
};

// Function to get the user details (with async/await pattern for better error handling)
export const getUser = async (): Promise<UserType | null> => {
  try {
    const response = await axiosInstance.get("/auth/me");
    console.log(response.data);

    return response.data; // Return the fetched user data
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null; // Return null if there is an error
  }
};
