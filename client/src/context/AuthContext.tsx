// src/context/AuthContext.tsx
import React, { createContext, useContext, useState } from "react";

// Define the context type
interface AuthContextType {
  user: any; // Replace `any` with the correct type
  // login: (email: string, password: string) => Promise<void>;
  // logout: () => void;
  setUser: any;
  isAuthenticated: boolean;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<any>(null); // Replace `any` with actual user type

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for consuming AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;
