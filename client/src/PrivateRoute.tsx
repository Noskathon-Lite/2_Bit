import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

interface PrivateRouteProps {
  children: JSX.Element; // or React.ReactNode if you expect multiple elements
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user } = useAuth();

  // if (loading) return <div>Loading...</div>;

  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
