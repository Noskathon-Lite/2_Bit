import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component

const Logout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication data (for example, localStorage)
    localStorage.removeItem("authToken"); // Adjust this to your authentication method

    // Navigate to the login page after logging out
    navigate("/login");
  };

  return (
    <Button
      onClick={handleLogout}
      className="bg-green-600 text-white hover:bg-green-700 px-6 py-2 rounded"
    >
      Logout
    </Button>
  );
};

export default Logout;
