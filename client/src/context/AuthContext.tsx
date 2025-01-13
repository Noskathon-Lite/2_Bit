import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { getUser } from "@/services/authService"; // Ensure getUser is typed correctly in the service
import { UserType } from "@/types/types"; // Import UserType from your types

// Define the shape of the AuthContext value
interface AuthContextType {
  user: UserType | null;
  loading: boolean;
  authToken: string | null;
  userType: boolean;
}

// Create the context with default values (initially undefined)
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserType | null>(null); // User state
  const [loading, setLoading] = useState(true); // Loading state for user authentication
  const [authToken, setAuthToken] = useState<string | null>(null); // Store the auth token
  const [userType, setUserType] = useState<boolean>(false); // User type state

  // Check for an existing token in localStorage
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        setAuthToken(token);
        const fetchedUser = await getUser(); // Await the async function if needed
        if (fetchedUser) {
          setUser(fetchedUser.result);

          console.log(fetchedUser.result)

          if (fetchedUser.result.role === "organization") {
            setUserType(true);
          }
        } else {
          setUser(null); // Handle the case where no user is found
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  // Auth context value
  const value: AuthContextType = {
    user,
    loading,
    authToken,
    userType,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Render children only when not loading */}
    </AuthContext.Provider>
  );
};

// Custom hook to use Auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
